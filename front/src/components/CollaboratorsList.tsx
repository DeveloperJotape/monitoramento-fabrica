import { Users } from 'lucide-react';

interface CollaboratorsListProps {
  colaboradores: string[];
}

export default function CollaboratorsList({ colaboradores }: CollaboratorsListProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-green-50 rounded-lg mr-3">
          <Users className="h-6 w-6 text-green-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800">Colaboradores</h3>
      </div>
      
      <div className="space-y-2">
        {colaboradores.length > 0 ? (
          colaboradores.slice(0, 10).map((colaborador, index) => (
            <div 
              key={index}
              className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
                {colaborador.charAt(0).toUpperCase()}
              </div>
              <span className="text-gray-700">{colaborador}</span>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center py-4">Nenhum colaborador encontrado</p>
        )}
        
        {colaboradores.length > 10 && (
          <div className="text-center pt-2">
            <span className="text-sm text-gray-500">
              e mais {colaboradores.length - 10} colaboradores...
            </span>
          </div>
        )}
      </div>
    </div>
  );
} 