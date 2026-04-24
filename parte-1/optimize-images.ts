import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

// Correção para ES Modules (__dirname não existe por padrão)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminho absoluto para a pasta raiz "public/assets"
const ASSETS_DIR = path.join(__dirname, 'public', 'assets');

// Configuração de qualidade do WebP
const WEBP_QUALITY = 80;

/**
 * Função recursiva para percorrer diretórios
 */
async function processDirectory(directory: string) {
  try {
    // Se o diretório não existir, avisamos mas não quebramos o script
    if (!fs.existsSync(directory)) {
      console.warn(`[Aviso] Diretório não encontrado: ${directory}`);
      return;
    }

    const entries = await fs.promises.readdir(directory, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(directory, entry.name);

      if (entry.isDirectory()) {
        // Se for uma pasta, entra nela recursivamente
        await processDirectory(fullPath);
      } else if (entry.isFile()) {
        // Se for um arquivo, verificamos a extensão
        const ext = path.extname(entry.name).toLowerCase();

        // Ignora expressamente SVG (já são otimizados matematicamente)
        if (ext === '.svg') {
          console.log(`[Skip] Mantendo SVG original: ${fullPath}`);
          continue;
        }

        // Processa arquivos PNG e JPG
        if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
          const newFileName = entry.name.replace(/\.[^/.]+$/, "") + '.webp';
          const newPath = path.join(directory, newFileName);

          try {
            console.log(`[Processando] Convertendo ${entry.name}...`);
            
            // Otimiza e salva como WebP
            await sharp(fullPath)
              .webp({ quality: WEBP_QUALITY })
              .toFile(newPath);

            console.log(`[Sucesso] Criado: ${newFileName}`);

            // Deleta o arquivo original antigo após conversão limpa
            await fs.promises.unlink(fullPath);
            console.log(`[Limpeza] Deletado original: ${entry.name}`);
            
          } catch (error) {
            console.error(`[Erro] Falha ao processar a imagem ${fullPath}:`, error);
          }
        }
      }
    }
  } catch (error) {
    console.error(`[Erro] Falha ao ler o diretório ${directory}:`, error);
  }
}

// Inicia a execução do script
console.log('--- Iniciando otimização em massa de Imagens para WebP ---');
console.log(`Diretório alvo: ${ASSETS_DIR}`);
console.log(`Qualidade configurada: ${WEBP_QUALITY}%\n`);

processDirectory(ASSETS_DIR)
  .then(() => {
    console.log('\n--- Otimização Finalizada! ---');
  })
  .catch((err) => {
    console.error('\n--- Falha Crítica no Script ---', err);
  });
