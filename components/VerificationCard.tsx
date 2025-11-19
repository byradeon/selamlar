import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, XCircle, Sparkles } from 'lucide-react';

type VerificationStatus = 'idle' | 'success' | 'error';

export const VerificationCard: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [status, setStatus] = useState<VerificationStatus>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Specific logic requested: Check if exactly "Selam"
    if (inputValue === 'Selam') {
      setStatus('success');
    } else {
      setStatus('error');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (status !== 'idle') {
      setStatus('idle'); // Reset status when user types again
    }
  };

  return (
    <div className="w-full">
      <div className="relative group">
        {/* Glow effect behind the card */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        
        <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
          <div className="flex flex-col items-center mb-8">
            <div className="p-3 bg-indigo-500/10 rounded-full mb-4 text-indigo-400">
              <Sparkles size={28} />
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight">Selamlar</h1>
            <p className="text-slate-400 mt-2 text-center text-sm">
              Devam etmek için sihirli kelimeyi girin.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Buraya yazın..."
                className={`w-full bg-slate-950/50 text-white placeholder:text-slate-600 border-2 rounded-xl px-4 py-3 outline-none transition-all duration-300 
                  ${status === 'error' 
                    ? 'border-red-500/50 focus:border-red-500' 
                    : status === 'success'
                      ? 'border-green-500/50 focus:border-green-500'
                      : 'border-slate-800 focus:border-indigo-500'
                  }`}
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 transform active:scale-[0.98] shadow-lg shadow-indigo-500/25"
            >
              <span>Kontrol Et</span>
              <Send size={18} />
            </button>
          </form>

          {/* Result Feedback Section */}
          <div className="mt-6 h-16 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              {status === 'success' && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex items-center gap-2 text-green-400 bg-green-400/10 px-4 py-2 rounded-lg border border-green-400/20"
                >
                  <CheckCircle2 size={20} />
                  <span className="font-medium">Tebrikler! Doğru cevap.</span>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex items-center gap-2 text-red-400 bg-red-400/10 px-4 py-2 rounded-lg border border-red-400/20"
                >
                  <XCircle size={20} />
                  <span className="font-medium">Üzgünüm, yanlış cevap.</span>
                </motion.div>
              )}
              
              {status === 'idle' && (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-slate-600 text-sm"
                >
                  Sonuç burada görünecek
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};