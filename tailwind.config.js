/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        /* background */
        bg: 'var(--color-bg)',

        equipmentBg: 'var(--color-bg-equipment)',
        medicalBg: 'var(--color-bg-medical)',
        profileBg: 'var(--color-bg-profile)',

        footerBg: 'var(--color-footer-bg)',
        barBg: 'var(--color-bar-bg)',

        /* UI */
        btnDisabled: 'var(--color-btn-disabled)',

        /* Brand */
        brand: 'var(--color-brand)',
        brandDeep: 'var(--color-brand-deep)',

        /* Text */
        text: 'var(--color-text)',
        textMuted: 'var(--color-text-muted)',
        placeholder: 'var(--color-placeholder)',
      },
    },
  },
  plugins: [],
};
