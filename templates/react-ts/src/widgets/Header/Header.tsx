import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Header() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-xl font-bold text-blue-600">
              FSD App
            </Link>
            <div className="flex gap-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {t('home')}
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {t('about')}
              </Link>
            </div>
          </div>
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md text-sm transition-colors"
          >
            {i18n.language === 'en' ? 'RU' : 'EN'}
          </button>
        </nav>
      </div>
    </header>
  );
}
