# Panel de Facturas

**Código:** público → [CespSebas/panel-facturas-carnices](https://github.com/CespSebas/panel-facturas-carnices)
**Tipo:** automatización / aplicación de escritorio · **Estado:** concluido

## Resumen

Automatiza el ciclo de la factura electrónica de Hacienda (Costa Rica): toma el comprobante XML oficial y lo convierte en un PDF con diseño de marca listo para enviar al cliente.

## Funcionalidad

- Lectura del XML de comprobantes electrónicos (v4.4)
- Generación de PDF desde una plantilla HTML/CSS propia
- Detección automática de facturas nuevas (carpeta vigilada y correo)
- Envío del PDF por correo
- Interfaz de escritorio empaquetada como ejecutable

## Stack

Python · HTML/CSS · watchdog · IMAP/SMTP · customtkinter · PyMuPDF · PyInstaller
