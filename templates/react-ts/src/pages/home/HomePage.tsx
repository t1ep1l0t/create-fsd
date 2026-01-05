import { useTranslation } from 'react-i18next';
import { Card } from '@shared/ui/Card';
import { Button } from '@shared/ui/Button';
import { useCounterStore } from '@shared/store/counter';
import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@shared/api/client';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export function HomePage() {
  const { t } = useTranslation();
  const { count, increment, decrement, reset } = useCounterStore();

  const { data: posts, isLoading } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: async () => {
      const response = await apiClient.get<Post[]>('/posts?_limit=5');
      return response.data;
    },
  });

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('welcome')}</h1>
        <p className="text-lg text-gray-600">
          React + Vite + FSD Architecture + TailwindCSS v4
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card title={t('counter')}>
          <div className="text-center space-y-4">
            <div className="text-6xl font-bold text-blue-600">{count}</div>
            <div className="flex gap-2 justify-center">
              <Button onClick={decrement} variant="danger">
                {t('decrement')}
              </Button>
              <Button onClick={reset} variant="secondary">
                {t('reset')}
              </Button>
              <Button onClick={increment} variant="success">
                {t('increment')}
              </Button>
            </div>
            <p className="text-sm text-gray-500">Powered by Zustand</p>
          </div>
        </Card>

        <Card title="React Query Example">
          {isLoading ? (
            <div className="text-center text-gray-500">Loading posts...</div>
          ) : (
            <ul className="space-y-2">
              {posts?.map((post) => (
                <li key={post.id} className="p-2 bg-gray-50 rounded">
                  <div className="font-medium text-sm">{post.title}</div>
                </li>
              ))}
            </ul>
          )}
          <p className="text-sm text-gray-500 mt-4">Powered by React Query + Axios</p>
        </Card>
      </div>

      <Card title="Technologies Used">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'React Router',
            'Zustand',
            'Axios',
            'i18next',
            'React Query',
            'TailwindCSS v4',
            'Vite',
            'FSD Architecture',
          ].map((tech) => (
            <div
              key={tech}
              className="p-3 bg-blue-50 text-blue-700 rounded-lg text-center font-medium"
            >
              {tech}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
