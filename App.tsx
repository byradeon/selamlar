
import React from 'react';
import { VerificationCard } from './components/VerificationCard';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900 selection:bg-indigo-500 selection:text-white">
      {/* Background Decorational Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Main Content */}
      <main className="relative z-10 w-full max-w-md px-4">
        <VerificationCard />
      </main>

      {/* Advertisement Panel (Right Side) */}
      <aside className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 z-10 flex-col gap-2">
        <div className="text-[10px] text-slate-500 uppercase tracking-widest text-center font-semibold">Reklam</div>
        <div className="w-[160px] h-[600px] bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-xl flex items-center justify-center overflow-hidden relative group">
          {/* Placeholder visual for Ad */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 opacity-80"></div>
          <div className="relative z-10 text-center p-4">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full mx-auto mb-3 flex items-center justify-center text-blue-400">
              <span className="font-bold text-xl">G</span>
            </div>
            <p className="text-slate-400 text-xs font-medium">Google Ads</p>
            <p className="text-slate-600 text-[10px] mt-1">Reklam Alanı</p>
          </div>
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        </div>
      </aside>
      
      {/* Footer */}
      <footer className="absolute bottom-4 w-full text-center text-slate-600 text-sm">
        <p>© {new Date().getFullYear()} Doğrulama Sistemi</p>
      </footer>
    </div>
  );
};

export default App;
