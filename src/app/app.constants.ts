export class Constants {
  public static get DASHBOARD_URL(): string {
    return '';
  }
  public static get LOGIN_URL(): string {
    return 'login';
  }
  public static get SIGNUP_URL(): string {
    return 'signup';
  }
  public static get USERMENU_URL(): string {
    return 'user_menu';
  }
  public static get BASIC_URL(): string {
    return 'basic';
  }
  public static get ADMIN_URL(): string {
    return 'admin';
  }
  public static get BACKEND_URL(): string {
    return 'http://localhost:8080';
  }
  public static get ACCOUNTS(): string {
    return '/accounts/';
  }
  public static get CHARACTER_URL(): string {
    return 'character';
  }
  public static get STATS(): Array<string> {
    return [
      'Fuerza',
      'Agilidad',
      'Aguante',
      'Inteligencia',
      'Espíritu',
      'Voluntad',
      'Percepción'
    ];
  }
  public static get COMBAT(): Array<string> {
    return [
      'Arcos',
      'Armas Arrojadizas',
      'Armas de Fuego',
      'Armas de Asta',
      'Armas Ligeras',
      'Armas Medias',
      'Armas Pesadas',
      'Ballestas',
      'Sin Armas',
      'Escudos'
    ];
  }
  public static get PHYSICS(): Array<string> {
    return [
      'Atletismo',
      'Advertir',
      'Resistencia',
      'Montar',
      'Proezas'
    ];
  }
}
