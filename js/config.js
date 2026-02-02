const CONFIG = {
  // Контактна інформація
  contact: {
    phone: '+380667556980',
    phoneFormatted: '+380 66 755 69 80',
    phoneNumber: '380667556980',
    email: 'curiouscrew1984@gmail.com',
    linkedin: 'https://www.linkedin.com/company/curious-crew-1984/',
    github: 'https://github.com/Curious-Crew'
  },

  // Проекти портфоліо
  projects: [
    {
      key: 'logistics',
      price: 6500,
      accentColor: 'bg-blue-500',
      gradient: 'from-blue-600/30 to-indigo-600/30',
      links: {
        video: 'https://drive.google.com/file/d/1eMIFyOeKAHjs8c29u9LYnrz4Tt1xCumj/view',
        ui: 'https://docs.google.com/presentation/d/1RltQA42HKyL8mvQvUlT3OSurVZjlIuMl-OK7qsZnTOY/edit',
        presentation: 'https://drive.google.com/file/d/1ondBuElOgMPVcvf-STbA3-TkIKM2s0dH/view'
      }
    },
    {
      key: 'orderly',
      price: 5000,
      accentColor: 'bg-emerald-500',
      gradient: 'from-emerald-600/30 to-teal-600/30',
      links: {
        video: 'https://drive.google.com/file/d/1kvuhIK5sQ9ZzLec7MlMW-0cz9YCWeFAU/view',
        ui: 'https://docs.google.com/presentation/d/1hVAvLHZzNgDvsOhslW_Q4bWPcDYXztdNoDTP_n_5CfA/edit',
        presentation: 'https://drive.google.com/file/d/1KV6A8cr_B8DyPG2imZ7cLYwe_8cYxu51/view'
      }
    },
    {
      key: 'businessDay',
      price: 29900,
      accentColor: 'bg-orange-500',
      gradient: 'from-orange-600/30 to-amber-600/30',
      links: {
        videos: [
          'https://drive.google.com/file/d/1-Jt4q9gn7R-N5SuD6MNJ_wU1dCxuVUHE/view',
          'https://drive.google.com/file/d/1hEDBaDKG4ZfkCyYkhD4lCSQHCqLGW8rP/view',
          'https://drive.google.com/file/d/1F-G7SFUUnjElueThHCscivLYCuCg4rez/view'
        ],
        description: 'https://docs.google.com/document/d/1hmb4Zi7Tj8nSa1lAjX7yKyYN4RqlbKVWJqafY28mo0/edit',
        presentations: [
          'https://drive.google.com/file/d/1KpftUnI0XSTVmhEVOcreyt-cPfB0pcxc/view',
          'https://drive.google.com/file/d/1jcypJ7EcdQnFfxTYj0ePFs7EstIMYPHR/view',
          'https://drive.google.com/file/d/12W6yZcz5Ints5zw1nzxB1eqkjlziJZZ0/view'
        ]
      }
    }
  ],

  // Канали зв'язку
  channels: [
    {
      key: 'whatsapp',
      icon: 'message-circle',
      color: 'from-green-500 to-green-600',
      iconColor: 'text-green-400',
      getHref: (phone, message) => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    },
    {
      key: 'telegram',
      icon: 'send',
      color: 'from-blue-500 to-blue-600',
      iconColor: 'text-blue-400',
      getHref: (phone) => `https://t.me/+${phone}`
    },
    {
      key: 'viber',
      icon: 'phone',
      color: 'from-purple-500 to-purple-600',
      iconColor: 'text-purple-400',
      getHref: (phone) => `viber://chat?number=%2B${phone}`
    },
    {
      key: 'linkedin',
      icon: 'linkedin',
      color: 'from-blue-600 to-blue-700',
      iconColor: 'text-blue-400',
      getHref: () => 'https://www.linkedin.com/company/curious-crew-1984/'
    },
    {
      key: 'email',
      icon: 'mail',
      color: 'from-red-500 to-red-600',
      iconColor: 'text-red-400',
      getHref: (_, message) => `mailto:curiouscrew1984@gmail.com?subject=Project%20Inquiry&body=${encodeURIComponent(message)}`
    },
    {
      key: 'github',
      icon: 'github',
      color: 'from-slate-600 to-slate-700',
      iconColor: 'text-slate-300',
      getHref: () => 'https://github.com/Curious-Crew'
    }
  ]
};

// Форматування ціни
function formatPrice(price) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  }).format(price).replace('$', '');
}