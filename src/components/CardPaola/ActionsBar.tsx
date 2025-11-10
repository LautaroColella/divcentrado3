import { Palette, Image as ImageIcon, Music, Film } from "lucide-react";

type Props = {
  onChangeBg: () => void;
  onChangeAvatar: () => void;
  onArtistBg: () => void;
  onMovieBg: () => void;
};
export default function ActionsBar({
  onChangeBg, onChangeAvatar, onArtistBg, onMovieBg,
}: Props) {
  return (
    <section className="card__actions">
      <button className="btn" onClick={onChangeBg}><Palette /><span>Cambiar Estilo</span></button>
      <button className="btn" onClick={onChangeAvatar}><ImageIcon /><span>Cambiar Foto</span></button>
      <button className="btn" onClick={onArtistBg}><Music /><span>Fondos Artistas</span></button>
      <button className="btn" onClick={onMovieBg}><Film /><span>Fondos Películas</span></button>
    </section>
  );
}
