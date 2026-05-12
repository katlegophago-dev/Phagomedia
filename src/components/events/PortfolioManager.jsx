import { useState } from 'react';
import { Plus, X, Upload, Lock, ChevronLeft, FolderOpen, Images } from 'lucide-react';

const ADMIN_PASSCODE = '2007';

const placeholderAlbums = {
  weddings: [
    {
      id: 'w1', name: "The Sebola's", Date: 'june 2024',
      cover: 'https://res.cloudinary.com/djpngdzyj/image/upload/v1778621046/compressed-2/IMG_8581_czcith.webp',
      images: [
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778621052/compressed-2/IMG_8596_o1crkv.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778621047/compressed-2/IMG_8592_euxjx8.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778621052/compressed-2/IMG_8597_2_mggppc.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778621040/compressed-2/IMG_8588_2_ogc51m.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778621051/compressed-2/IMG_8593_akbfjk.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778621050/compressed-2/IMG_8590_zxr96s.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778621046/compressed-2/IMG_8581_czcith.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778621039/compressed-2/IMG_8586_fpfauw.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778621047/compressed-2/IMG_8587_iwmmqr.webp',
        
      ],
    },
    {
      id: 'w2', name: 'The Phatedis', date: 'June 2024',
      cover: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80',
        'https://images.unsplash.com/photo-1525772764200-be829a350797?w=800&q=80',
      ],
    },
  ],
  matric: [
    {
      id: 'm1', name: 'Phathu & Vida', date: 'October 2025',
      cover: 'https://res.cloudinary.com/djpngdzyj/image/upload/v1778621046/compressed-2/IMG_8581_czcith.webp',
      images: [
       'https://res.cloudinary.com/djpngdzyj/image/upload/v1778621052/compressed-2/IMG_8596_o1crkv.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778621047/compressed-2/IMG_8592_euxjx8.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778621052/compressed-2/IMG_8597_2_mggppc.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778621040/compressed-2/IMG_8588_2_ogc51m.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778621051/compressed-2/IMG_8593_akbfjk.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778621050/compressed-2/IMG_8590_zxr96s.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778621046/compressed-2/IMG_8581_czcith.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778621039/compressed-2/IMG_8586_fpfauw.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778621047/compressed-2/IMG_8587_iwmmqr.webp',
      ],
    },
  ],
  training: [
    {
      id: 't1', name: 'Media Workshop 2024', date: 'February 2024',
      cover: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
        'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80',
        'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80',
        'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
      ],
    },
  ],
  'live-music': [
    {
      id: 'lm1', name: 'Joburg Live Fest', date: 'October 2024',
      cover: 'https://images.unsplash.com/photo-1501386761578-eaa54b5c3bfc?w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1501386761578-eaa54b5c3bfc?w=800&q=80',
        'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80',
        'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80',
        'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80',
      ],
    },
  ],
};

function PasscodeModal({ onSuccess, onClose }) {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passcode === ADMIN_PASSCODE) { onSuccess(); }
    else { setError(true); setPasscode(''); }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/60 backdrop-blur-sm" onClick={onClose}>
      <form onSubmit={handleSubmit} onClick={e => e.stopPropagation()} className="bg-white p-8 w-80 shadow-2xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-navy flex items-center justify-center">
            <Lock size={16} className="text-white" />
          </div>
          <h3 className="font-grotesk font-bold text-navy text-lg">Admin Access</h3>
        </div>
        <p className="font-inter text-navy/60 text-sm mb-5">Enter passcode to manage albums.</p>
        <input
          type="password" value={passcode} autoFocus
          onChange={e => { setPasscode(e.target.value); setError(false); }}
          placeholder="Enter passcode"
          className="w-full border border-navy/20 px-4 py-3 font-inter text-sm mb-1 focus:outline-none focus:border-navy"
        />
        {error && <p className="font-inter text-signal-red text-xs mb-3">Incorrect passcode.</p>}
        <div className="flex gap-3 mt-4">
          <button type="button" onClick={onClose} className="flex-1 py-2 border border-navy/20 font-grotesk text-sm text-navy/60 hover:text-navy hover:border-navy transition-colors">Cancel</button>
          <button type="submit" className="flex-1 py-2 bg-navy text-white font-grotesk font-semibold text-sm hover:bg-signal-red transition-colors">Unlock</button>
        </div>
      </form>
    </div>
  );
}

export default function PortfolioManager({ eventType }) {
  const [albums, setAlbums] = useState(placeholderAlbums[eventType] || []);
  const [openAlbum, setOpenAlbum] = useState(null);
  const [adminMode, setAdminMode] = useState(false);
  const [showPasscode, setShowPasscode] = useState(false);
  const [newAlbumName, setNewAlbumName] = useState('');
  const [creatingAlbum, setCreatingAlbum] = useState(false);

  const handleUnlock = () => { setAdminMode(true); setShowPasscode(false); };

  const createAlbum = () => {
    if (!newAlbumName.trim()) return;
    const album = {
      id: Date.now().toString(),
      name: newAlbumName.trim(),
      date: new Date().toLocaleDateString('en-ZA', { month: 'long', year: 'numeric' }),
      cover: null,
      images: [],
    };
    setAlbums(prev => [...prev, album]);
    setNewAlbumName('');
    setCreatingAlbum(false);
    setOpenAlbum(album.id);
  };

  const deleteAlbum = (id) => setAlbums(prev => prev.filter(a => a.id !== id));

  const uploadToAlbum = (e, albumId) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const url = URL.createObjectURL(file);
      setAlbums(prev => prev.map(a => {
        if (a.id !== albumId) return a;
        return { ...a, images: [...a.images, url], cover: a.cover || url };
      }));
    });
  };

  const removeFromAlbum = (albumId, url) => {
    setAlbums(prev => prev.map(a => {
      if (a.id !== albumId) return a;
      const images = a.images.filter(u => u !== url);
      return { ...a, images, cover: images[0] || null };
    }));
  };

  const currentAlbum = albums.find(a => a.id === openAlbum);

  return (
    <div id="portfolio">
      {showPasscode && <PasscodeModal onSuccess={handleUnlock} onClose={() => setShowPasscode(false)} />}

      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-8 h-px bg-signal-red" />
          <span className="font-inter text-signal-red text-sm tracking-[0.3em] uppercase">Portfolio</span>
          {openAlbum && (
            <>
              <span className="text-navy/30">/</span>
              <span className="font-inter text-navy/60 text-sm">{currentAlbum?.name}</span>
            </>
          )}
        </div>
        <div className="flex items-center gap-2">
          {openAlbum && (
            <button onClick={() => setOpenAlbum(null)} className="flex items-center gap-1 font-inter text-xs px-3 py-1.5 border border-navy/20 text-navy/60 hover:border-navy hover:text-navy transition-colors">
              <ChevronLeft size={13} /> All Albums
            </button>
          )}
          {adminMode ? (
            <button onClick={() => setAdminMode(false)} className="font-inter text-xs px-3 py-1.5 bg-navy text-white">Done</button>
          ) : (
            <button onClick={() => setShowPasscode(true)} className="flex items-center gap-1.5 font-inter text-xs px-3 py-1.5 border border-navy/30 text-navy/60 hover:border-navy hover:text-navy transition-colors">
              <Lock size={12} /> Manage
            </button>
          )}
        </div>
      </div>

      {!openAlbum && (
        <>
          {adminMode && (
            <div className="mb-6">
              {creatingAlbum ? (
                <div className="flex gap-2">
                  <input
                    autoFocus value={newAlbumName}
                    onChange={e => setNewAlbumName(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && createAlbum()}
                    placeholder="Album name (e.g. John & Mary Wedding)"
                    className="flex-1 border border-navy/20 px-4 py-2 font-inter text-sm focus:outline-none focus:border-navy"
                  />
                  <button onClick={createAlbum} className="px-4 py-2 bg-navy text-white font-grotesk text-sm hover:bg-signal-red transition-colors">Create</button>
                  <button onClick={() => setCreatingAlbum(false)} className="px-4 py-2 border border-navy/20 font-grotesk text-sm text-navy/60">Cancel</button>
                </div>
              ) : (
                <button onClick={() => setCreatingAlbum(true)} className="flex items-center gap-2 px-5 py-2 border-2 border-dashed border-signal-red/40 text-signal-red font-grotesk text-sm hover:bg-signal-red/5 transition-colors w-full justify-center">
                  <Plus size={16} /> New Album
                </button>
              )}
            </div>
          )}

          {albums.length === 0 && (
            <div className="text-center py-16 border border-dashed border-navy/10">
              <FolderOpen size={32} className="text-navy/20 mx-auto mb-3" />
              <p className="font-inter text-navy/40 text-sm">No albums yet. Unlock to create one.</p>
            </div>
          )}

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {albums.map(album => (
              <div key={album.id} className="group relative cursor-pointer" onClick={() => setOpenAlbum(album.id)}>
                <div className="aspect-[4/3] overflow-hidden bg-tech-grey relative">
                  {album.cover
                    ? <img src={album.cover} alt={album.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    : <div className="w-full h-full flex items-center justify-center"><Images size={32} className="text-navy/20" /></div>
                  }
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="font-grotesk font-semibold text-white text-sm tracking-wide">Open Album →</span>
                  </div>
                  {adminMode && (
                    <button
                      onClick={e => { e.stopPropagation(); deleteAlbum(album.id); }}
                      className="absolute top-2 right-2 w-6 h-6 bg-signal-red flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    >
                      <X size={12} />
                    </button>
                  )}
                </div>
                <div className="pt-2 pb-1">
                  <p className="font-grotesk font-semibold text-navy text-sm">{album.name}</p>
                  <p className="font-inter text-navy/40 text-xs">{album.date} · {album.images.length} photos</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {openAlbum && currentAlbum && (
        <div>
          {adminMode && (
            <div className="mb-6 border-2 border-dashed border-signal-red/40 p-5 text-center bg-signal-red/5">
              <Upload size={22} className="text-signal-red mx-auto mb-2" />
              <p className="font-inter text-navy/60 text-sm mb-3">Add photos to <strong>{currentAlbum.name}</strong></p>
              <label className="cursor-pointer inline-flex items-center gap-2 px-5 py-2 bg-navy text-white font-grotesk font-semibold text-xs tracking-wide hover:bg-signal-red transition-colors">
                <Plus size={14} />
                Choose Photos
                <input type="file" multiple accept="image/*" onChange={e => uploadToAlbum(e, openAlbum)} className="hidden" />
              </label>
            </div>
          )}

          {currentAlbum.images.length === 0 && (
            <div className="text-center py-16 border border-dashed border-navy/10">
              <Images size={32} className="text-navy/20 mx-auto mb-3" />
              <p className="font-inter text-navy/40 text-sm">No photos in this album yet.</p>
            </div>
          )}

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {currentAlbum.images.map((url, i) => (
              <div key={i} className="relative group aspect-[4/3] overflow-hidden">
                <img src={url} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors" />
                {adminMode && (
                  <button
                    onClick={() => removeFromAlbum(openAlbum, url)}
                    className="absolute top-2 right-2 w-6 h-6 bg-signal-red flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X size={12} />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
