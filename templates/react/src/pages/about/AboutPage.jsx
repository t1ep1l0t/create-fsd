import { Card } from '@shared/ui/Card';
import { useTranslation } from 'react-i18next';

export function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-4xl font-bold text-gray-900">{t('about')}</h1>

      <Card title="FSD Architecture">
        <p className="text-gray-700 leading-relaxed mb-4">
          This project follows Feature-Sliced Design (FSD) architecture, which provides
          a clear and scalable folder structure for your React applications.
        </p>
        <div className="space-y-2">
          <div className="flex gap-2">
            <span className="font-mono bg-gray-100 px-2 py-1 rounded">app/</span>
            <span className="text-gray-600">- Application initialization and providers</span>
          </div>
          <div className="flex gap-2">
            <span className="font-mono bg-gray-100 px-2 py-1 rounded">pages/</span>
            <span className="text-gray-600">- Application pages</span>
          </div>
          <div className="flex gap-2">
            <span className="font-mono bg-gray-100 px-2 py-1 rounded">widgets/</span>
            <span className="text-gray-600">- Complex UI components</span>
          </div>
          <div className="flex gap-2">
            <span className="font-mono bg-gray-100 px-2 py-1 rounded">features/</span>
            <span className="text-gray-600">- Business features</span>
          </div>
          <div className="flex gap-2">
            <span className="font-mono bg-gray-100 px-2 py-1 rounded">entities/</span>
            <span className="text-gray-600">- Business entities</span>
          </div>
          <div className="flex gap-2">
            <span className="font-mono bg-gray-100 px-2 py-1 rounded">shared/</span>
            <span className="text-gray-600">- Reusable code and UI components</span>
          </div>
        </div>
      </Card>

      <Card title="Configured Libraries">
        <ul className="space-y-3">
          <li>
            <strong className="text-blue-600">React Router DOM</strong>
            <p className="text-gray-600 text-sm">Client-side routing with nested routes</p>
          </li>
          <li>
            <strong className="text-blue-600">Zustand</strong>
            <p className="text-gray-600 text-sm">Lightweight state management</p>
          </li>
          <li>
            <strong className="text-blue-600">Axios</strong>
            <p className="text-gray-600 text-sm">HTTP client with interceptors configured</p>
          </li>
          <li>
            <strong className="text-blue-600">React Query</strong>
            <p className="text-gray-600 text-sm">Server state management and caching</p>
          </li>
          <li>
            <strong className="text-blue-600">i18next</strong>
            <p className="text-gray-600 text-sm">Internationalization (EN/RU)</p>
          </li>
          <li>
            <strong className="text-blue-600">TailwindCSS v4</strong>
            <p className="text-gray-600 text-sm">Utility-first CSS framework</p>
          </li>
        </ul>
      </Card>

      <Card title="Get Started">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Development</h4>
            <code className="block bg-gray-900 text-green-400 p-3 rounded">
              npm run dev
            </code>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Build for production</h4>
            <code className="block bg-gray-900 text-green-400 p-3 rounded">
              npm run build
            </code>
          </div>
        </div>
      </Card>
    </div>
  );
}
