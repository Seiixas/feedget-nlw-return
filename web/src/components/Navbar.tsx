import { Bell, MagnifyingGlass, UserPlus } from 'phosphor-react';
import rocketseatLogo from '../assets/images/rocketseat.svg';
import userProfilePhoto from '../assets/images/user.jpg';

export function Navbar() {
  return (
    <nav className="bg-zinc-800 h-16 p-8 flex items-center justify-between">
      <img src={rocketseatLogo} alt="Rocketseat logo" />

      <ul className="flex gap-6 list-none">
        <li className="inline"><a href="#">Home</a></li>
        <li className="inline"><a href="#">Discover</a></li>
        <li className="inline"><a href="#">Ignite</a></li>
      </ul>

      <div className="flex items-center gap-4">
    
        <MagnifyingGlass 
          size={20}
          weight="bold"/>

        <UserPlus 
          size={20}
          weight="bold" />

        <Bell 
          size={20}
          weight="bold" />

        <img 
          src={userProfilePhoto} 
          alt="User profile photo" 
          className="ring-1 ring-offset-2 ring-offset-zinc-900 ring-white rounded-full w-10"/>

      </div>
      </nav>
    )
}