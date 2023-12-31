self.addEventListener("install", (event) => {
  console.log("Install event!");
});

self.addEventListener("activate", (event) => {
  console.log("Activate event!");
});

self.addEventListener("fetch", (event) => {
  console.log("Fetch intercepted for:", event.request.url);
});

const cacheName = "cache-v1";
const resourcesToPrecache = [
  "/",
  "index.html",
  "portfolio-details.html",
  "gallery.html",
  "assets/css/style.css",
  "assets/img/favicon.png",
  "assets/img/favicon1.png",
  "assets/img/favicon2.png",
  // "assets/img/favicon3.png",
  "assets/img/favicon4.png",
  "assets/img/favicon5.png",
  "assets/img/favicon6.png",
  "assets/img/favicon7.png",
  "assets/img/about/vanMain.webp",
  "assets/img/clients/Barratt_Developments_logo.svg.png",
  "assets/img/clients/birmingham-city-council-vector-logo-xs.webp",
  "assets/img/clients/bmf.png",
  "assets/img/clients/bovis-homes-group-logo-095246177C-seeklogo.com.png",
  "assets/img/clients/DJS_Research_website-logos_FINAL_construction copy 3.jpg",
  "assets/img/clients/networkRail.webp",
  "assets/img/clients/png-transparent-logo-brand-balfour-beatty-construction-product-water-man-blue-emblem-text.png",
  "assets/img/clients/sto-595b54767bed0.png",
  "assets/img/clipart/dampcourse-min.webp",
  "assets/img/clipart/images.webp",
  "assets/img/clipart/plasterer1-min.webp",
  "assets/img/clipart/plasterer3-min.webp",
  "assets/img/clipart/rendering-min.webp",
  "assets/img/clipart/restoration-min.webp",
  "assets/img/featured_services/custom_finish.webp",
  "assets/img/featured_services/dry_lining.webp",
  "assets/img/featured_services/preparation_1.webp",
  "assets/img/featured_services/rendering.webp",
  "assets/img/featured_services/skimming.webp",
  "assets/img/featured_services/venetian.webp",
  "assets/img/gallery/bianco_zandobbio_2_marble_chips_terrazzo_stucco_italiano.webp",
  "assets/img/gallery/calcite-detail-1.webp",
  "assets/img/gallery/dolomia-detail.webp",
  "assets/img/gallery/extra-white_chips_terrazzo_stucco_italiano.webp",
  "assets/img/gallery/giallo_mori_2_marble_chips_terrazzo_stucco_italiano.webp",
  "assets/img/gallery/giallo_siena_2_marble_chips_terrazzo_stucco_italiano.webp",
  "assets/img/gallery/grassello-stucco-wall-mineral-plasters-finishes.webp",
  "assets/img/gallery/lava-plaster-craters-detail.webp",
  "assets/img/gallery/limeclay_terracotta_stucco_italiano.webp",
  "assets/img/gallery/Madreperla_chips_terrazzo_stucco_italiano.webp",
  "assets/img/gallery/marmorino-coarse-madreperla-detail.webp",
  "assets/img/gallery/marmorino-fine-new.webp",
  "assets/img/gallery/marmorino-metallic-bronze-detail.webp",
  "assets/img/gallery/marmorino-velvet-detail.webp",
  "assets/img/gallery/nero_ebano_3_marble_chips_terrazzo_stucco_italiano.webp",
  "assets/img/gallery/pastellone-wall-detail2.webp",
  "assets/img/gallery/rosa_corallo_2_marble_chips_terrazzo_stucco_italiano.webp",
  "assets/img/gallery/rosso_verona_marble_chips_terrazzo_stucco_italiano.webp",
  "assets/img/gallery/seta-plaster-detail.webp",
  "assets/img/gallery/stars-detail.webp",
  "assets/img/gallery/verde_alpi_3_marble_chips_terrazzo_stucco_italiano.webp",
  "assets/img/hero/h600_aqua_marble_effect1600.webp",
  "assets/img/hero/h600_beige_marble_effect1600.webp",
  "assets/img/hero/custom_venetian_plaster_grey_marble_effect.webp",
  "assets/img/hero/custom_venetian_plaster_lightbeige_marble_effect1600.webp",
  "assets/img/hero/hero6_600.webp",
  "assets/img/hero/hero600.webp",
  "assets/img/logo/jam_logo_.webp",
  "assets/img/polished_finishes/about1_jam.webp",
  "assets/img/polished_finishes/IMG-WA0007.webp",
  "assets/img/polished_finishes/IMG-WA0009.webp",
  "assets/img/polished_finishes/IMG-WA0010.webp",
  "assets/img/polished_finishes/IMG-WA0018.webp",
  "assets/img/polished_finishes/IMG-WA0021.webp",
  "assets/img/polished_finishes/IMG-WA0030.webp",
  "assets/img/polished_finishes/IMG-WA0031.webp",
  "assets/img/portfolio/extBuild/pebbledash1600x1200_1_11zon.webp",
  "assets/img/portfolio/extBuild/pebbledashdoor1600x2133_2_11zon.webp",
  "assets/img/portfolio/extBuild/pebbledashon1600x1200_3_11zon.webp",
  "assets/img/portfolio/extBuild/pebbledashwall1600x1200_4_11zon.webp",
  "assets/img/portfolio/extBuild/pebbledashwalls1600x1200_5_11zon.webp",
  "assets/img/portfolio/New_St_Station/completd_waterproof_rendering 636x778_1_11zon.webp",
  "assets/img/portfolio/New_St_Station/concrete_beam&scaffolding 584x778_2_11zon.webp",
  "assets/img/portfolio/New_St_Station/IMG_20210519_131101_3_11zon.webp",
  "assets/img/portfolio/New_St_Station/IMG_20210525_134116_4_11zon.webp",
  "assets/img/portfolio/New_St_Station/IMG_20210525_134133_5_11zon.webp",
  "assets/img/portfolio/New_St_Station/Preparing_Concrete_Beam_New_Street_Station_1600_6_11zon.webp",
  "assets/img/portfolio/resBuild2/IMG_20210629_134032-min_1_11zon.webp",
  "assets/img/portfolio/resBuild2/IMG_20210705_180941-min_2_11zon.webp",
  "assets/img/portfolio/resBuild2/IMG_20210707_111512-min_3_11zon.webp",
  "assets/img/portfolio/resBuild2/IMG_20210707_111526-min_4_11zon.webp",
  "assets/img/portfolio/resBuild2/IMG_20210709_175859-min_5_11zon.webp",
  "assets/img/portfolio/resBuild2/IMG_20210720_175932-min_6_11zon.webp",
  "assets/img/portfolio/resBuild2/IMG_20210723_130727-min_7_11zon.webp",
  "assets/img/portfolio/residentialBuild/Granite_1600_1_11zon.webp",
  "assets/img/portfolio/residentialBuild/IMAG0110_1_11zon copy.webp",
  "assets/img/portfolio/residentialBuild/IMAG0110_1_11zon.webp",
  "assets/img/portfolio/residentialBuild/IMAG0452_2_11zon.webp",
  "assets/img/portfolio/residentialBuild/IMAG0454_2_11zon.webp",
  "assets/img/portfolio/residentialBuild/IMAG0457_800x741_3_11zon.webp",
  "assets/img/portfolio/residentialBuild/IMAG0464_800x741_4_11zon.webp",
  "assets/img/portfolio/setOne/IMG-20230802-WA0270-min-min_1_11zon.webp",
  "assets/img/portfolio/setOne/IMG-20230802-WA0277-min-min_2_11zon.webp",
  "assets/img/portfolio/setOne/IMG-20230802-WA0282-min-min_3_11zon.webp",
  "assets/img/portfolio/setOne/IMG-20230802-WA0283-min-min_4_11zon.webp",
  "assets/img/portfolio/setOne/IMG-20230802-WA0285-min-min_5_11zon.webp",
  "assets/img/portfolio/setOne/IMG-20230802-WA0287-min_6_11zon.webp",
  "assets/img/portfolio/setSix/IMG-20230802-WA0003-min_1_11zon.webp",
  "assets/img/portfolio/setSix/IMG-20230802-WA0004-min_2_11zon.webp",
  "assets/img/portfolio/setSix/IMG-20230802-WA0006-min_3_11zon.webp",
  "assets/img/portfolio/setSix/IMG-20230802-WA0007-min_4_11zon.webp",
  "assets/img/portfolio/setSix/IMG-20230802-WA0008-min_5_11zon.webp",
  "assets/img/portfolio/setSix/IMG-20230802-WA0009-min_6_11zon.webp",
  "assets/img/portfolio/setSix/IMG-20230802-WA0012-min_7_11zon.webp",
  "assets/img/portfolio/setSix/IMG-20230802-WA0013-min_8_11zon.webp",
  "assets/img/portfolio/setSix/IMG-20230802-WA0083-min_9_11zon.webp",
  "assets/img/portfolio/setSix/IMG-20230802-WA0085-min_10_11zon.webp",
  "assets/img/portfolio/setSix/IMG-20230802-WA0087-jpg-min_11_11zon.webp",
  "assets/img/portfolio/setSix/IMG-20230802-WA0092-min_12_11zon.webp",
  "assets/img/portfolio/setSix/IMG-20230802-WA0095-jpg-min_13_11zon.webp",
  "assets/img/portfolio/setThree/IMG-20230802-WA0229_copy_2_2_11zon.webp",
  "assets/img/portfolio/setThree/IMG-20230802-WA0230_copy_2_4_11zon.webp",
  "assets/img/portfolio/setThree/IMG-20230802-WA0231-min_5_11zon.webp",
  "assets/img/portfolio/setThree/IMG-20230802-WA0233-min_6_11zon.webp",
  "assets/img/portfolio/setThree/IMG-20230802-WA0235-min_7_11zon.webp",
  "assets/img/portfolio/setThree/IMG-20230802-WA0236_copy_9_11zon.webp",
  "assets/img/portfolio/setThree/IMG-20230802-WA0238_copy_11_11zon.webp",
  "assets/img/portfolio/setThree/IMG-20230802-WA0239-min_12_11zon.webp",
  "assets/img/portfolio/setTwo/IMG-20230802-WA0240-min_1_11zon.webp",
  "assets/img/portfolio/setTwo/img-20230802-wa0241-copy-2-64ef50d0075c4_2_11zon.webp",
  "assets/img/portfolio/setTwo/img-20230802-wa0249-copy-2-64ef50d1ea338_3_11zon.webp",
  "assets/img/portfolio/setTwo/IMG-20230802-WA0264_copy_2.webp",
  "assets/img/portfolio/setTwo/img-20230802-wa0262-copy-2-64ef50d4d48d6_5_11zon.webp",
  "assets/img/portfolio/setTwo/IMG-20230802-WA0264_copy_2_6_11zon.webp",
  "assets/img/video/bathroom.mp4",
  "assets/img/video/damp_course.mp4",
  "assets/img/video/decorativeMouldings.mp4",
  "assets/img/video/demo_working.mp4",
  "assets/img/video/jampromoNoAudio.mp4",
  "assets/img/video/kitchen.mp4",
  "assets/img/video/rendering.mp4",
  "assets/img/video/renovation.mp4",
  "assets/img/video/restoration.mp4",
  "assets/img/video/theBoss.mp4",
  "assets/img/video/venetianPlaster.mp4",
  "assets/img/video/venetianStyles.mp4",
];

self.addEventListener("install", (event) => {
  console.log("Service worker install event!");
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(resourcesToPrecache);
    })
  );
});
// Responding with only cached resources
self.addEventListener("fetch", (event) => {
  event.respondWith(caches.match(event.request));
});

// Implementing cache-first
self.addEventListener("fetch", (event) => {
  event.respondWith(caches.match(event.request)).then((cachedResponse) => {
    return cachedResponse || fetch(event.request);
  });
});


