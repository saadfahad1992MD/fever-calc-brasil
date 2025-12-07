# Share Modal Requirements for Brazil Version

## Components Needed:
1. **Share Button** (top-right corner)
   - Text: "Compartilhar" (Portuguese) / "Share" (English)
   - Pink/Magenta background color
   - Icon: Share icon

2. **Share Modal Dialog**
   - Title: "Compartilhe a Calculadora de Febre" (PT) / "Share Fever Calculator" (EN)
   - QR Code displaying the website URL (fever-calc-brasil.vercel.app)
   - Instruction text: "Escaneie o código QR para compartilhar o site" (PT) / "Scan the QR code to share the website" (EN)

3. **Share Buttons in Modal:**
   - WhatsApp button (green): "Compartilhar via WhatsApp" (PT) / "Share via WhatsApp" (EN)
   - Twitter button (blue): "Compartilhar via Twitter" (PT) / "Share via Twitter" (EN)
   - Copy Link button (yellow): "Copiar Link" (PT) / "Copy Link" (EN)

4. **URL Display:**
   - Show the website URL below buttons: fever-calc-brasil.vercel.app

## Implementation:
- Use shadcn Dialog component for modal
- Use qrcode library or qrcode.react for QR code generation
- Implement share functionality for WhatsApp, Twitter, and clipboard
