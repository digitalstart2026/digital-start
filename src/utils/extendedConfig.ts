const extendedConfig = {
  boxShadow: {
    header_shadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.1)",
    /** Light mode: layered, soft depth (pair with dark:shadow-none or dark:shadow where needed) */
    soft: "0 1px 2px rgba(27, 29, 30, 0.04), 0 4px 16px rgba(27, 29, 30, 0.05)",
    soft_md: "0 2px 6px rgba(27, 29, 30, 0.05), 0 12px 32px rgba(27, 29, 30, 0.07)",
    soft_lg: "0 8px 40px rgba(27, 29, 30, 0.08)",
  },
  colors: {
    /** Light-mode canvas & cards — warm neutrals, not pure white */
    surface: "#F3F2EE",
    surface_elevated: "#FBFAF7",
    ink_muted: "#5C5F62",
    dark_black: "#1B1D1E",
    purple_blue: "#4928FD",
    purple: "#BA81EE",
    blue: "#70B5FF",
    orange: "#FFAF68",
    green: "#79D45E",
    pink: "#F4889A",
    blue_gradient: "#D9F3FC",
    yellow_gradient: "#FDF1D3",
    paleYellow: "#F6E683",
    dark_yellow_gradient: "#443f32",
    dark_blue_gradient: "#303d42"
  },
  screens: {
    "Xsm": "425px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1024px",
    "2xl": "1440px"
  },
  spacing: {
    25: '25rem',
    3.75: '3.75rem',
    6.5: '6.5rem',
    18.75: '18.75rem',
    31.25: '31.25rem',
    48: '48rem',
    50: '50rem',
    38: '38rem',
    32: '32rem',
  },
  keyframes: {
    'accordion-down': {
      from: {
        height: '0'
      },
      to: {
        height: 'var(--radix-accordion-content-height)'
      }
    },
    'accordion-up': {
      from: {
        height: 'var(--radix-accordion-content-height)'
      },
      to: {
        height: '0'
      }
    }
  },
  animation: {
    'accordion-down': 'accordion-down 0.2s ease-out',
    'accordion-up': 'accordion-up 0.2s ease-out'
  }
}

export { extendedConfig }