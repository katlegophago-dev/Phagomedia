import { useState } from 'react';
import { Plus, X, Upload, Lock, ChevronLeft, FolderOpen, Images } from 'lucide-react';
const ADMIN_PASSCODE = '2007';
const placeholderAlbums = {
  weddings: [
    {
      id: 'w4',
      name: 'The Sebola\'s',
      date: '2024',
      cover: 'https://res.cloudinary.com/djpngdzyj/image/upload/v1778622973/IMG_8543_2_ds3jb1.webp',
      images: [
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778622973/IMG_8543_2_ds3jb1.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778623084/IMG_8524_ekey8a.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778622974/IMG_8558_huwdz7.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778623078/IMG_8528_nzsmmm.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778622976/IMG_8572_2_cjbl4t.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778622970/IMG_8545_afppff.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778622973/IMG_8537_gyu073.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778622974/IMG_8529_xco27p.webp',
      ],
    },
    {
      id: 'w3',
      name: 'The Phatedi\'s',
      date: '2024',
      cover: 'https://res.cloudinary.com/djpngdzyj/image/upload/v1778623144/e7650679-0a6e-455d-884c-c361ecde53b8_2_inr75t.webp',
      images: [
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778623144/e7650679-0a6e-455d-884c-c361ecde53b8_2_inr75t.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778623147/Katlego_1479_ll4fmf.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778623144/Katlego_1464_gkuaap.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778623149/Katlego_1449_2_gyx5lr.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778623148/Katlego_968_2_xj8ksp.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778623148/Katlego_180_kh8gek.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778623148/Katlego_169_lek74r.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778623149/Katlego_1173_bnqfif.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778623142/Katlego_1506_txeora.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778623144/Katlego_1672_jq83ll.webp',
      ],
    },
    {
      id: 'w2',
      name: 'Mishy & Moloko',
      date: '2024',
      cover: 'https://res.cloudinary.com/djpngdzyj/image/upload/v1778624783/Phago_Media_MM_317_h7oenh.webp',
      images: [
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778624783/Phago_Media_MM_317_h7oenh.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778624786/Phago_Media_MM_175_zcsa8g.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778624785/Phago_Media_MM_423_hbcwui.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778625020/Phago_Media_MM_358_ngufyl.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778625023/Phago_Media_MM_390_k8uvhu.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778625045/Phago_Media_MM_404_rlwbck.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778624786/Phago_Media_MM_420_x0dwwv.webp',
      ],
    },
    {
      id: 'w1',
      name: 'The Moloto\'s',
      date: '2024',
      cover: 'https://res.cloudinary.com/djpngdzyj/image/upload/v1778623737/Moloto_Photo_Session_Main4_uxsuzp.webp',
      images: [
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778623737/Moloto_Photo_Session_Main4_uxsuzp.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778623737/Phago_Media_Moloto_9_zrrvpx.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778623735/IMG_0957_obtkjh.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778623737/Phago_Media_Moloto_22_efpenp.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778623740/Moloto_Photo_Session_Main90_ecfmpj.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778623739/Phago_Media_Moloto_1_Fotor_f0gevb.webp',
      ],
    },
  ],
  matric: [
    {
      id: 'm1',
      name: 'Phathu & Vida',
      date: 'October 2025',
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
      id: 'm2',
      name: 'Malimela\'s Day',
      date: '2024',
      cover: 'https://res.cloudinary.com/djpngdzyj/image/upload/v1778623711/IMG_5896_2_ed4myi.webp',
      images: [
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778623713/IMG_6902_2-2_succzj.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778623712/IMG_6887-2_tvukoa.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778623711/IMG_6143_nscsi9.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778623724/IMG_6150-2_mcnehn.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778623718/IMG_5921_rf980o.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778623711/IMG_5896_2_ed4myi.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778623706/IMG_5712_vibi4d.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778623725/IMG_6682_evhh0r.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778623364/IMG_6110-2_fk2hgl.webp',
      ],
    },
  ],
  training: [
    {
      id: 't1',
      name: 'Worship In Africa 3',
      date: '2024',
      cover: 'https://res.cloudinary.com/djpngdzyj/image/upload/v1778626117/oqfvqowjhemdt4174fyp_uevjil.webp',
      images: [
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778626117/oqfvqowjhemdt4174fyp_uevjil.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778626118/yykpqbyl9hjftpeliroz_eykz9s.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778626106/vjafpehq3nlfkljonjof_oyg7fl.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778626117/orgaezmfzxioyap159ix_rv1ime.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778626115/b8phuh8j3jplz0il4ncg_v2yurl.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778626116/lo9alcdtsdvepz7ubwzo_kglgiv.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778626112/qdoxfszro1pcrdy3ghm1_vakxfy.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778626108/wqsdvzs8zkue9267hcep_kcfh0r.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778626116/s2whevxi4oxigswobmh0_pohn0u.webp',
        'https://res.cloudinary.com/djpngdzyj/image/upload/v1778626112/nwdfvwbxwjuccnc7c7b0_jrqs02.webp',
      ],
    },
  ],
  'live-music': [
    {
      id: 'lm1',
      name: 'Joburg Live Fest',
      date: 'October 2024',
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
                  {/* Permanent dim overlay */}
                  <div className="absolute inset-0 bg-navy/30" />
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors" />
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
                {/* Date removed — name and photo count only */}
                <div className="pt-2 pb-1">
                  <p className="font-grotesk font-semibold text-navy text-sm">{album.name}</p>
                  <p className="font-inter text-navy/40 text-xs">{album.images.length} photos</p>
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
          {/* Visit our page prompt */}
          <div className="mt-10 text-center border-t border-navy/10 pt-8">
            <p className="font-inter text-navy/50 text-sm">This is just a glimpse of our work.</p>
            <p className="font-grotesk font-semibold text-navy text-base mt-1">
              Visit our social pages to see more of what we do ↗
            </p>
          </div>
        </div>
      )}
    </div>
  );
}