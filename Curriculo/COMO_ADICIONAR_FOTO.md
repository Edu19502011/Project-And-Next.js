# 📸 Como Adicionar Sua Foto no Avatar

## Passo a Passo:

### 1. Prepare sua foto
- Use uma foto quadrada (recomendado: 500x500px ou maior)
- Formatos aceitos: JPG, PNG, WebP
- Renomeie para `avatar.jpg` (ou `avatar.png`)

### 2. Coloque a foto na pasta `public`
```
Curriculo/
├── public/
│   └── avatar.jpg  ← Coloque sua foto aqui!
├── app/
└── ...
```

### 3. Edite o arquivo `app/page.tsx`

Procure por estas linhas (aproximadamente linha 192-200):

```tsx
{/* INSTRUÇÕES: Para adicionar sua foto, coloque a imagem em /public/avatar.jpg e descomente a linha abaixo */}
{/* <img src="/avatar.jpg" alt="Eduardo" className="w-full h-full object-cover" /> */}

{/* Remova este div quando adicionar sua foto */}
<div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-4xl font-bold text-white">
  ED
</div>
```

### 4. Descomente a linha da imagem e remova o div placeholder:

**ANTES:**
```tsx
{/* <img src="/avatar.jpg" alt="Eduardo" className="w-full h-full object-cover" /> */}

<div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-4xl font-bold text-white">
  ED
</div>
```

**DEPOIS:**
```tsx
<img src="/avatar.jpg" alt="Eduardo" className="w-full h-full object-cover" />
```

### 5. Salve e recarregue a página!

Sua foto agora aparecerá no avatar! 🎉

## Dicas:

- Se usar PNG, troque `avatar.jpg` por `avatar.png` no código
- A foto será automaticamente arredondada e terá um anel azul
- Certifique-se que a foto tem boa qualidade e está bem enquadrada
- Para melhor resultado, use uma foto com fundo neutro ou transparente
