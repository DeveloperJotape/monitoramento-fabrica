import { ReactNode } from 'react';

interface StatCardProps {
  icon: ReactNode;
  title: string;
  value: string | number;
  description?: string;
  className?: string;
}

export default function StatCard({ icon, title, value, description, className = '' }: StatCardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-blue-50 rounded-lg">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-3xl font-bold text-blue-600 mb-1">{value}</p>
      {description && (
        <p className="text-sm text-gray-500">{description}</p>
      )}
    </div>
  );
} 