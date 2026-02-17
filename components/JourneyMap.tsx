
import React, { useState } from 'react';
import { JOURNEY_POINTS } from '../data/courseContent';
import { JourneyPoint } from '../types';

export const JourneyMap: React.FC = () => {
  const [unlockedLevel, setUnlockedLevel] = useState(1);
  const [selectedPoint, setSelectedPoint] = useState<JourneyPoint | null>(JOURNEY_POINTS[0]);
  const [isPanelOpen, setIsPanelOpen] = useState(true);

  const handlePointClick = (point: JourneyPoint) => {
    if (point.id <= unlockedLevel + 1) {
      setSelectedPoint(point);
      setIsPanelOpen(true);
      if (point.id > unlockedLevel) {
        setUnlockedLevel(point.id);
      }
    }
  };

  const MAP_IMAGE_URL = "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/ae963dfc-500c-4eb9-b9d2-60a9973f008f_rw_1920.png?h=be1d5ea5d6d2845ffed93d224ef88299";

  return (
    <div className="flex flex-col h-full min-h-[850px] bg-[#0c0a09] animate-fadeIn rounded-[2.5rem] overflow-hidden relative shadow-2xl">
      
      {/* Header flotante */}
      <div className="absolute top-6 left-12 z-40 pointer-events-none">
        <h3 className="text-3xl font-black text-white drop-shadow-[0_4px_12px_rgba(0,0,0,1)] flex items-center gap-3">
          <i className="fas fa-compass text-amber-500 animate-spin-slow"></i> RECORRIDO DEL ÉXODO
        </h3>
        <p className="text-sm text-amber-200/90 font-medium mt-1 drop-shadow-md">
          Trayecto histórico paso a paso.
        </p>
      </div>

      {/* ÁREA DEL MAPA INTERACTIVO */}
      <div className="relative flex-1 overflow-hidden">
        {/* Imagen del Mapa Real */}
        <img 
          src={MAP_IMAGE_URL} 
          alt="Mapa del Éxodo" 
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none opacity-90 transition-opacity duration-1000"
        />

        {/* Trazado secuencial */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <path 
            d={`M ${JOURNEY_POINTS.map(p => `${p.x}% ${p.y}%`).join(' L ')}`}
            fill="none" 
            stroke="rgba(245, 158, 11, 0.6)" 
            strokeWidth="5" 
            strokeDasharray="14 14" 
            className="animate-dash"
          />
        </svg>

        {/* Hotspots numerados */}
        {JOURNEY_POINTS.map((point) => {
          const isUnlocked = point.id <= unlockedLevel;
          const isNext = point.id === unlockedLevel + 1;
          const isSelected = selectedPoint?.id === point.id;

          return (
            <div 
              key={point.id} 
              className="absolute transform -translate-x-1/2 -translate-y-1/2 z-30"
              style={{ left: `${point.x}%`, top: `${point.y}%` }}
            >
                <button
                  onClick={() => handlePointClick(point)}
                  disabled={!isUnlocked && !isNext}
                  className={`group relative w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-sm md:text-xl font-black transition-all duration-500 shadow-[0_0_25px_rgba(0,0,0,0.8)] border-4 
                      ${isUnlocked 
                      ? 'bg-amber-600 border-white text-white hover:scale-125 hover:rotate-6' 
                      : isNext 
                          ? 'bg-white border-amber-500 text-amber-600 scale-100 animate-pulse-glow cursor-pointer' 
                          : 'bg-gray-900/80 border-gray-700 text-gray-500 scale-75 opacity-40 cursor-not-allowed'
                      }
                      ${isSelected ? 'ring-[15px] ring-amber-500/50 ring-offset-4 ring-offset-transparent scale-125 z-50 shadow-[0_0_50px_rgba(245,158,11,1)]' : ''}
                  `}
                >
                    <span className="relative z-10">{point.id}</span>
                    {isNext && <span className="absolute inset-0 rounded-full animate-ping bg-amber-500/60"></span>}
                    
                    {/* Etiqueta flotante rápida */}
                    <div className="absolute bottom-full mb-4 px-4 py-2 bg-black/90 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl text-xs font-bold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 pointer-events-none">
                        {point.name}
                    </div>
                </button>
            </div>
          );
        })}

        {/* TARJETA DE INFORMACIÓN LATERAL IZQUIERDA (Para no tapar el avance hacia el Este) */}
        {selectedPoint && (
          <div 
            className={`absolute top-24 bottom-10 left-8 w-full max-w-[400px] z-50 transition-all duration-700 ease-out transform ${
              isPanelOpen ? 'translate-x-0 opacity-100' : '-translate-x-[110%] opacity-0'
            }`}
          >
            <div className="h-full bg-black/80 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-[0_30px_90px_rgba(0,0,0,0.8)] flex flex-col relative overflow-hidden">
                
                {/* Decoración fondo */}
                <div className="absolute -bottom-10 -left-10 opacity-10 text-[15rem] text-amber-500 pointer-events-none rotate-12">
                   <i className="fas fa-scroll"></i>
                </div>

                {/* Control cerrar */}
                <button 
                  onClick={() => setIsPanelOpen(false)}
                  className="absolute right-6 top-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all z-20"
                >
                  <i className="fas fa-times text-white"></i>
                </button>

                <div className="p-10 md:p-12 overflow-y-auto custom-scrollbar flex-1 relative z-10">
                    <div className="mb-10 flex flex-col gap-4">
                        <div className="w-20 h-20 bg-amber-600 text-white rounded-[2rem] flex items-center justify-center text-4xl font-black shadow-2xl rotate-3 border-4 border-white/20">
                            {selectedPoint.id}
                        </div>
                        <div>
                            <span className="px-3 py-1 bg-amber-500/30 text-amber-300 text-[10px] font-bold rounded-full uppercase tracking-widest border border-amber-500/40">
                                <i className="fas fa-book-open mr-2"></i> {selectedPoint.biblicalRef}
                            </span>
                            <h4 className="text-4xl font-black text-white mt-4 leading-none tracking-tighter">
                                {selectedPoint.name}
                            </h4>
                        </div>
                    </div>

                    <div className="space-y-10">
                        <div>
                            <h5 className="text-[10px] font-black text-amber-500 uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
                                <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span> Hito del Camino
                            </h5>
                            <p className="text-2xl text-amber-100 font-bold italic leading-tight border-l-4 border-amber-600 pl-6 shadow-text">
                                "{selectedPoint.title}"
                            </p>
                        </div>

                        <div>
                            <h5 className="text-[10px] font-black text-amber-500 uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
                                <span className="w-2 h-2 bg-amber-500 rounded-full"></span> Análisis Bíblico
                            </h5>
                            <p className="text-gray-300 leading-relaxed text-lg font-light tracking-wide">
                                {selectedPoint.description}
                            </p>
                        </div>

                        {selectedPoint.id < JOURNEY_POINTS.length && unlockedLevel === selectedPoint.id && (
                          <div className="pt-8 border-t border-white/10">
                            <div className="bg-gradient-to-br from-amber-600 to-amber-800 text-white p-6 rounded-3xl flex items-center gap-5 shadow-2xl animate-pulse">
                                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                                    <i className="fas fa-location-arrow text-xl"></i>
                                </div>
                                <div>
                                    <span className="block text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Continuar Viaje</span>
                                    <span className="text-sm font-bold">Pulsa el punto {selectedPoint.id + 1} para avanzar</span>
                                </div>
                            </div>
                          </div>
                        )}
                    </div>
                </div>

                {/* Mini info footer */}
                <div className="p-8 bg-black/40 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em]">Latin Theological Seminary</span>
                    <i className="fas fa-bible text-gray-700"></i>
                </div>
            </div>
          </div>
        )}

        {/* Botón flotante para recuperar el panel */}
        {!isPanelOpen && selectedPoint && (
          <button 
            onClick={() => setIsPanelOpen(true)}
            className="absolute left-10 bottom-10 z-50 bg-amber-600 text-white w-16 h-16 rounded-[2rem] shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all animate-bounce-slow"
          >
            <i className="fas fa-info-circle text-2xl"></i>
          </button>
        )}
      </div>

      <style>{`
        @keyframes dash {
          to { stroke-dashoffset: -100; }
        }
        .animate-dash {
          animation: dash 40s linear infinite;
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 15px rgba(255, 255, 255, 0.2); border-color: #fff; }
          50% { box-shadow: 0 0 30px rgba(245, 158, 11, 0.8); border-color: #f59e0b; }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2.5s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-bounce-slow {
          animation: bounce 3s ease-in-out infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(245, 158, 11, 0.4); border-radius: 10px; }
        .shadow-text { text-shadow: 0 2px 4px rgba(0,0,0,0.5); }
      `}</style>
    </div>
  );
};
