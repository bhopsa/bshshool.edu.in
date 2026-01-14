// Load site data and render editable sections (data-driven)
async function loadSiteData(){
  try{
    const [siteRes, staffRes, galleryRes] = await Promise.all([
      fetch('/data/site.json'),
      fetch('/data/staff.json'),
      fetch('/data/gallery.json')
    ]);
    const site = siteRes.ok ? await siteRes.json() : null;
    const staff = staffRes.ok ? await staffRes.json() : [];
    const gallery = galleryRes.ok ? await galleryRes.json() : [];

    if(site){
      document.querySelectorAll('[data-site-name]').forEach(el=> el.textContent = site.name || el.textContent);
      document.querySelectorAll('[data-site-phone]').forEach(el=> el.textContent = site.phone || el.textContent);
      document.querySelectorAll('[data-site-email]').forEach(el=> el.textContent = site.email || el.textContent);
      document.querySelectorAll('[data-site-address]').forEach(el=> el.textContent = site.address || el.textContent);
      if(site.tagline){ const t = document.getElementById('site-tagline'); if(t) t.textContent = site.tagline; }
      // logo images
      document.querySelectorAll('[data-site-logo]').forEach(img=> img.src = site.logo || img.src);
      // about text
      if(site.about){ const a = document.getElementById('about-text'); if(a) a.textContent = site.about; }
    }

    // Render staff
    const staffList = document.getElementById('staff-list');
    if(staffList){
      staffList.innerHTML = '';
      staff.forEach(member=>{
        const col = document.createElement('div'); col.className='col-md-4 mb-3';
        col.innerHTML = `
          <div class="card h-100">
            <img src="${member.photo || 'assets/img/teacher1.jpg'}" class="card-img-top" alt="${member.name}">
            <div class="card-body">
              <h5 class="card-title">${member.name}</h5>
              <p class="card-text"><strong>${member.role}</strong></p>
              <p class="card-text">${member.bio || ''}</p>
            </div>
          </div>
        `;
        staffList.appendChild(col);
      });
    }

    // Render gallery
    const galleryList = document.getElementById('gallery-list');
    if(galleryList){
      galleryList.innerHTML = '';
      gallery.forEach(item=>{
        const col = document.createElement('div'); col.className='col-6 col-md-3 mb-3';
        col.innerHTML = `<img src="${item.image || 'assets/img/placeholder1.jpg'}" class="img-fluid rounded" alt="${item.title || ''}">`;
        galleryList.appendChild(col);
      });
    }

  }catch(err){
    console.error('Error loading site data', err);
  }
}

// Initialize on DOMContentLoaded
if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', loadSiteData);
}else{ loadSiteData(); }
