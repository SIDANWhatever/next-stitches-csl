import { styled } from '@src/styles/stitches.config'

export const Text = styled('div', {
  my: 'auto',
  textAlign: 'center',
  fontFamily: '$primary',
  whiteSpace: 'nowrap',

  variants: {
    main: {
      create: {
        text: ['24px', '24px', '40px', '64px'],
        backgroundImage: '$gradient-primary-text',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
        fontWeight: 700
      },
      welcome: {
        text: ['24px', '24px', '40px', '64px'],
        fontWeight: 700
      },
      description: {
        text: ['10px', '10px', '12px', '18px'],
        color: '$textSecondary'
      },
      'wallet-title': {
        text: ['18px'],
        color: '$textPrimary'
      },
      'wallet-item': {
        text: ['14px'],
        color: '$textPrimary'
      },
      'feature-title': {
        text: ['15px', '15px', '18px', '22px'],
        fontWeight: 500,
        color: '$textPrimary'
      },
      'feature-description': {
        text: ['12px', '12px', '14px', '18px'],
        color: '$textPrimary'
      },
      'category-name': {
        text: ['12px', '12px', '15px', '20px'],
        fontWeight: 700,
        textAlign: 'left',
        color: '$textPrimary'
      },
      'category-more': {
        text: ['32px'],
        fontWeight: 700,
        textAlign: 'left',
        color: '$white'
      },
      'category-available': {
        text: ['10px', '10px', '12px'],
        fontWeight: 500,
        textAlign: 'left',
        color: '$textSecondary'
      },
      'category-popup-title': {
        text: ['28px']
      },
      'category-popup-item': {
        text: ['28px'],
        textShadow: '-2px -2px 4px  rgba(255, 255, 255, 0.25), 2px 2px 4px rgba(255, 255, 255, 0.50)'
      },
      'top-auction-index': {
        text: ['20px'],
        color: '$textSecondary'
      },
      'top-auction-short': {
        text: ['16px', '16px', '20px'],
        fontWeight: 500,
        color: '$textPrimary',
        textTransform: 'uppercase'
      },
      'top-auction-item': {
        text: ['16px'],
        color: '$textPrimary'
      }
    },
    domain: {
      rarity: {
        text: ['12px'],
        color: '$textPrimary'
      },
      brand: {
        text: ['15px'],
        color: '$white'
      },
      'domain-card': {
        text: ['20px'],
        fontWeight: 600,
        textTransform: 'none',
        textShadow: '2px 2px 4px rgba(255, 252, 252, 0.25), -2px -2px 4px rgba(255, 255, 255, 0.25)'
      },
      preview: {
        text: ['8px'],
        color: '$white'
      },
      status: {
        text: ['18px'],
        fontWeight: 700,
        color: '$textSecondary'
      },
      domain: {
        text: ['36px'],
        fontWeight: 700,
        backgroundImage: '$gradient-primary-text',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent'
      },
      price: {
        text: ['18px'],
        color: '$textSecondary',
        fontWeight: 600
      }
    },
    dialog: {
      title: {
        text: ['20px'],
        color: '$textPrimary',
        fontWeight: 700
      },
      content: {
        text: ['16px'],
        color: '$textPrimary',
        whiteSpace: 'pre-line'
      }
    },
    profile: {
      section: {
        text: ['12px']
      },
      title: {
        text: ['16px'],
        color: '$textPrimary',
        fontWeight: 700
      },
      description: {
        text: ['16px'],
        color: '$textSecondary'
      },
      'stat-title': {
        text: ['14px'],
        color: '$textSecondary'
      },
      'stat-number': {
        text: ['15px'],
        fontWeight: 700,
        color: '$textPrimary'
      },
      'domain-main-primary': {
        text: '16px',
        color: '$textPrimary'
      },
      'domain-main-secondary': {
        text: '16px',
        color: '$textSecondary'
      },
      'domain-title': {
        text: ['18px'],
        color: '$textPrimary'
      },
      'domain-short': {
        text: ['14px'],
        fontWeight: 500,
        color: '$textPrimary',
        textTransform: 'uppercase'
      },
      'domain-name': {
        text: ['16px'],
        color: '$textSecondary'
      },
      transaction: {
        text: ['16px'],
        color: '$textSecondary'
      },
      'transaction-title': {
        text: ['16px'],
        fontWeight: 700,
        color: '$textPrimary'
      },
      'transfer-title': {
        text: ['14px'],
        color: '$textPrimary'
      },
      'transfer-row': {
        text: ['14px'],
        line: ['26px'],
        color: '$textSecondary'
      },
      'domain-filter': {
        text: ['16px'],
        color: '$textPrimary'
      }
    },
    title: {
      subtitle: {
        text: ['12px', '12px', '14px', '17px'],
        fontWeight: 700,
        textTransform: 'uppercase',
        textColor: '$primary',
        letterSpacing: '2px'
      },
      main: {
        text: ['24px', '24px', '36px', '48px'],
        fontWeight: 700,
        color: '$textPrimary'
      }
    },
    countdown: {
      number: {
        text: ['20px'],
        fontWeight: 600
      },
      quantifier: {
        text: ['10px']
      }
    },
    transaction: {
      title: {
        text: ['20px'],
        line: ['26px'],
        textAlign: 'start',
        fontWeight: 700,
        backgroundImage: '$gradient-primary',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent'
      },
      slogan: {
        text: ['48px'],
        line: ['48px'],
        textAlign: 'start',
        whiteSpace: 'normal',
        fontWeight: 700,
        color: '$textPrimary'
      },
      description: {
        text: ['18px'],
        line: ['25.2px'],
        textAlign: 'start',
        whiteSpace: 'normal',
        color: '$textSecondary'
      },
      positiveAmount: {
        text: ['14px'],
        line: ['15px'],
        color: '$status-green'
      },
      negativeAmount: {
        text: ['14px'],
        line: ['15px'],
        color: '$status-red'
      }
    },
    button: {
      search: {
        text: ['18px'],
        letterSpacing: '0.5px',
        color: '$white'
      },
      large: {
        text: ['20px'],
        fontWeight: 500
      },
      normal: {
        text: ['14px']
      }
    },
    footer: {
      slogan: {
        text: ['12px', '12px', '12px', '16px'],
        color: '$textSecondary',
        whiteSpace: 'normal',
        textAlign: 'start'
      },
      title: {
        text: ['12px', '12px', '16px', '20px'],
        fontWeight: 700,
        color: '$textPrimary'
      },
      link: {
        text: ['8px', '8px', '14px', '16px'],
        color: '$textSecondary'
      },
      copyright: {
        text: ['10px', '10px', '16px'],
        color: '$textPrimary'
      },
      company: {
        text: ['10px', '10px', '16px'],
        color: '$textPrimary',
        // backgroundImage: '$gradient-primary-text',
        // '-webkit-background-clip': 'text',
        // '-webkit-text-fill-color': 'transparent',
        fontWeight: 700
      }
    },
    tooltip: {
      normal: {
        text: ['14px'],
        line: ['19.6px'],
        whiteSpace: 'normal'
      }
    },
    style: {
      warning: {
        text: ['14px'],
        fontWeight: 500,
        color: '$warning',
        whiteSpace: 'normal',
        textAlign: 'start',
        textShadow: '$text'
      },
      'warning-wallet': {
        text: ['14px'],
        fontWeight: 500,
        color: '#FF002B',
        whiteSpace: 'normal',
        textAlign: 'start',
        textShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
      },
      terms: {
        text: ['14px'],
        textDecoration: 'underline',
        color: '$textSecondary'
      }
    }
  }
})
