import { Gear } from 'phosphor-react';

interface SettingsButtonProps {
  onClick: () => void;
}

export function SettingsButton({ onClick }: SettingsButtonProps) {
  return (
    <button onClick={onClick} className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100" title="Abrir botão de configurações do Widget">
      <Gear weight="bold" className="h-4 w-4" />
    </button>
  );
}