export const USER_STATUS = {
  ATIVO: 'Ativo',
  DESATIVADO: 'Desativado',
};

export const USER_STATUS_FINANCEIRO = {
  PAGO: 'Pago',
  AGUARDANDO_PAGAMENTO: 'Aguardando Pagamento',
};

export const FINANCIAL_STATUS = {
  PAID: 'PAID',
  WAITING_PAYMENT: 'WAITING_PAYMENT',
};

export const MENU_ADM_OPTIONS: MenuOptionsType[] = [
  {
    key: 'DASHBOARD',
    name: 'Dashboard',
    url: '/',
  },

  {
    key: 'USERS',
    name: 'Usuarios',
    url: '/usuarios',
  },

  {
    key: 'COURSES',
    name: 'Cursos',
    url: '/cursos',
  },

  {
    key: 'NOTIFICATIONS',
    name: 'Notificações',
    url: '/notificacoes',
  },

  {
    key: 'PROFILE',
    name: 'Perfil',
    url: '/perfil',
  },

  {
    key: 'LOGOUT',
    name: 'Sair',
    url: '/sair',
  },
];

export const MENU_USER_OPTIONS: MenuOptionsType[] = [
  {
    key: 'DASHBOARD',
    name: 'Dashboard',
    url: '/',
  },
  {
    key: 'COURSES',
    name: 'Cursos',
    url: '/cursos',
  },

  {
    key: 'PROFILE',
    name: 'Perfil',
    url: '/perfil',
  },

  {
    key: 'LOGOUT',
    name: 'Sair',
    url: '/sair',
  },
];

export const TYPE_USER = {
  ADMIN: 'ADMIN',
  USER: 'USER',
};
