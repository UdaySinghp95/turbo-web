/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
          colors: {
            'primary': 'var(--primary)',
            'secondary': 'var(--secondary)',
            'secondary-100': 'var(--secondary-100)',
            'primary-400': 'var(--primary-400)',
            'tertiary': 'var(--tertiary)',
            'surface-200': 'var(--surface-200)',
            'primary-200': 'var(--primary-200)',
            'primary-100': 'var(--primary-100)',
            'primary-300': 'var(--primary-300)',
            'surface-100': 'var(--surface-100)',
            'surface-50': 'var(--surface-50)',
            'primary-600': 'var(--primary-600)',
            'dark': 'var(--dark)',
            'secondary-600': 'var(--secondary-600)',
            'secondary-500': 'var(--secondary-500)',
            'success': 'var(--success)',
            'error': 'var(--error)',
            'warning': 'var(--warning)',
            'info': 'var(--info)',
            'disable': 'var(--disable)',
            'disable-button': 'var(--disable-button)',
            'surface': 'var(--surface)',
          },
          screens: {
            'pp-landing-mobile': {
              raw: 'only screen and (max-width: 600px)',
            },
            'pp-landing-desktop': {
              raw: 'only screen and (min-width: 960px)',
            },
          },
          spacing: {
            '1/6': '16.666667%;',
          },
          boxShadow: {
            'button--primary': '0.3em 0.3em var(--secondary)',
            'button--secondary': '0.1em 0.1em var(--secondary)',
          },
          fontSize: {
            'pp-section-heading': '2.4rem',
            'pp-section-subheading': '1.2rem',
            'pp-section-body': '1.1rem',
          },
        },
      },
  };