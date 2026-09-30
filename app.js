/* ============================================================
   KARAMICHOS TOWER — PRESENTATION SCRIPT
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

    const slidesData = [

        // --------------------------------------------------------
        // SLIDE 1 — Εισαγωγή
        // --------------------------------------------------------
        {
            title: "Ο Πύργος του Καραμίχου: Ένα Ταξίδι στην Ιστορία",
            content: `
                <div class="split-grid">
                    <div class="split-column">
                        <p class="slide-text">
                            Ο Πύργος του Καραμίχου δεν είναι απλώς ένα παλιό κτίριο. Είναι ο <strong>μοναδικός σωζόμενος μάρτυρας</strong> μιας ολόκληρης εποχής στην πόλη των Φαρσάλων. Σας προσκαλούμε να ανακαλύψετε την ιστορία του, από τα Οθωμανικά χρόνια μέχρι τη σύγχρονη αναγέννησή του.
                        </p>

                        <div class="highlight-box amber">
                            <h3 class="box-title"><i class="fas fa-star"></i> Σύντομη Επισκόπηση</h3>
                            <ul class="bullet-list">
                                <li>Χτίστηκε τον <strong>18ο αιώνα</strong> στην Τουρκοκρατία</li>
                                <li>Το <strong>μοναδικό σωζόμενο πυργόσπιτο</strong> στα Φάρσαλα</li>
                                <li>Αναστηλώθηκε και λειτουργεί ως <strong>Κέντρο Ψηφιακής Φωτογραφίας</strong></li>
                            </ul>
                        </div>
                    </div>

                    <div class="split-column">
                        <div class="image-container">
                            <img src="https://raw.githubusercontent.com/conchr/Karamichos-Tower/main/%CE%9A%CE%B1%CF%81%CE%B1%CE%BC%CE%AF%CF%87%CE%BF%CF%821.jpg"
                                 alt="Ο Πύργος του Καραμίχου" class="clickable-image">
                            <p class="image-hint"><i class="fas fa-search-plus"></i> Κάντε κλικ στην εικόνα για μεγέθυνση</p>
                        </div>
                    </div>
                </div>
            `
        },

        // --------------------------------------------------------
        // SLIDE 2 — Τι είναι ο Πύργος
        // --------------------------------------------------------
        {
            title: "Τι Είναι ο Πύργος του Καραμίχου; Το «Πυργόσπιτο»",
            content: `
                <p class="slide-text">
                    Πρόκειται για ένα σπάνιο παράδειγμα <strong>πυργόσπιτου</strong> της Όψιμης Οθωμανικής Περιόδου. Αυτά τα κτίρια συνδύαζαν αμυντικά χαρακτηριστικά (πύργος) με οικιστική χρήση (σπίτι), εξυπηρετώντας συνήθως πλούσιες ή σημαντικές οικογένειες της περιοχής. Είναι το <strong>μοναδικό σωζόμενο κτίσμα</strong> αυτού του είδους στην ευρύτερη περιοχή των Φαρσάλων.
                </p>

                <div class="cards-grid">
                    <div class="info-card">
                        <i class="fas fa-hourglass-half icon-big"></i>
                        <h3>Χρονολόγηση</h3>
                        <p>Εκτιμάται ότι κατασκευάστηκε τον <strong>18ο αιώνα</strong></p>
                    </div>
                    <div class="info-card">
                        <i class="fas fa-building icon-big"></i>
                        <h3>Τύπος</h3>
                        <p>Τριώροφο κτίριο με <strong>επιβλητική παρουσία</strong></p>
                    </div>
                    <div class="info-card">
                        <i class="fas fa-shield-alt icon-big"></i>
                        <h3>Λειτουργία</h3>
                        <p>Αμυντικό + οικιστικό — <strong>διπλός ρόλος</strong></p>
                    </div>
                </div>
            `
        },

        // --------------------------------------------------------
        // SLIDE 3 — Εποχή Κατασκευής
        // --------------------------------------------------------
        {
            title: "Η Εποχή της Κατασκευής: Ο 18ος Αιώνας",
            content: `
                <div class="split-grid">
                    <div class="split-column">
                        <p class="slide-text">
                            Ο Πύργος χτίστηκε στα χρόνια της <strong>Τουρκοκρατίας</strong>, μια εποχή όπου η Θεσσαλία — και ειδικά τα Φάρσαλα — ήταν μια σημαντική γεωργική περιοχή. Τα πυργόσπιτα εξυπηρετούσαν την ανάγκη για <strong>προστασία</strong>, αλλά και την <strong>επίδειξη κύρους</strong> των ιδιοκτητών τους (Οθωμανών αξιωματούχων ή πλούσιων γαιοκτημόνων).
                        </p>

                        <div class="highlight-box amber">
                            <h3 class="box-title"><i class="fas fa-flag"></i> Μετά το 1881</h3>
                            <p class="box-text">Ακόμη και μετά την <strong>απελευθέρωση της Θεσσαλίας</strong> το 1881, ο Πύργος παρέμεινε ένα σύμβολο ισχύος και πλούτου.</p>
                        </div>
                    </div>

                    <div class="split-column">
                        <div class="image-container">
                            <img src="https://raw.githubusercontent.com/conchr/Karamichos-Tower/main/%CE%9A%CE%B1%CF%81%CE%B1%CE%BC%CE%AF%CF%87%CE%BF%CF%823.jpg"
                                 alt="Πανοραμική άποψη του Πύργου" class="clickable-image">
                            <p class="image-hint"><i class="fas fa-search-plus"></i> Κάντε κλικ για μεγέθυνση</p>
                        </div>
                    </div>
                </div>
            `
        },

        // --------------------------------------------------------
        // SLIDE 4 — Μετα-Οθωμανική Μετάβαση
        // --------------------------------------------------------
        {
            title: "Η Μετα-Οθωμανική Μετάβαση: Οι Πρώτοι Έλληνες Ιδιοκτήτες",
            content: `
                <p class="slide-text">
                    Μετά την ενσωμάτωση της Θεσσαλίας στο ελληνικό κράτος (1881), ο Πύργος περιήλθε σε ελληνικά χέρια. Η πρώτη γνωστή οικογένεια που τον απέκτησε ήταν η οικογένεια <strong>Πανταζή</strong>, γηγενείς Φαρσαλινοί που ασχολούνταν με το ζωεμπόριο.
                </p>

                <div class="split-grid equal">
                    <div class="split-column">
                        <div class="highlight-box blue">
                            <h3 class="box-title"><i class="fas fa-users"></i> Οικογένεια Πανταζή</h3>
                            <ul class="bullet-list">
                                <li>Γηγενείς Φαρσαλινοί</li>
                                <li>Ασχολούνταν με το <strong>ζωεμπόριο</strong></li>
                                <li>Ιδιοκτησία από το <strong>1881</strong></li>
                            </ul>
                        </div>
                    </div>

                    <div class="split-column">
                        <div class="highlight-box">
                            <h3 class="box-title"><i class="fas fa-question-circle"></i> Ιστορικό Κενό</h3>
                            <p class="box-text">Η αναζήτηση για τους ιδιοκτήτες πριν από το <strong>1881</strong> παραμένει ατελής — ένα από τα άλυτα μυστήρια του Πύργου.</p>
                        </div>
                    </div>
                </div>

                <div class="quote-box">
                    <p>«Η μετάβαση από την Οθωμανική στην Ελληνική διοίκηση σηματοδότησε μια νέα εποχή για τον Πύργο.»</p>
                </div>
            `
        },

        // --------------------------------------------------------
        // SLIDE 5 — Σωτήρης Καραμίχος
        // --------------------------------------------------------
        {
            title: "Η Εποχή του Σωτήρη Καραμίχου: 1931",
            content: `
                <div class="split-grid">
                    <div class="split-column">
                        <p class="slide-text">
                            Το <strong>1931</strong>, ο Πύργος αγοράστηκε από τον <strong>Σωτήρη Καραμίχο</strong>, έναν έμπορο με καταγωγή από τον Ασπροπόταμο. Ήταν η οικογένεια Καραμίχου που έδωσε τελικά το όνομά της στο μνημείο. Ο Σωτήρης Καραμίχος έζησε στον Πύργο με την οικογένειά του, σηματοδοτώντας μια <strong>περίοδο ακμής</strong>.
                        </p>

                        <div class="highlight-box green">
                            <h3 class="box-title"><i class="fas fa-store"></i> Η Εποχή των Μεγάλων Εμπόρων</h3>
                            <p class="box-text">Την εποχή εκείνη, η Θεσσαλία γνώριζε μεγάλη εμπορική δραστηριότητα, με εμπόρους σαν τον Καραμίχο να διαδραματίζουν σημαντικό ρόλο στην τοπική οικονομία.</p>
                        </div>
                    </div>

                    <div class="split-column">
                        <div class="timeline">
                            <div class="timeline-item">
                                <p class="timeline-year">1881</p>
                                <p class="timeline-text">Οικογένεια Πανταζή</p>
                            </div>
                            <div class="timeline-item">
                                <p class="timeline-year">1931</p>
                                <p class="timeline-text"><strong>Σωτήρης Καραμίχος</strong> αγοράζει τον Πύργο</p>
                            </div>
                            <div class="timeline-item">
                                <p class="timeline-year">1942</p>
                                <p class="timeline-text">Θάνατος Σωτήρη Καραμίχου</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        // --------------------------------------------------------
        // SLIDE 6 — Εσωτερική Πολυτέλεια
        // --------------------------------------------------------
        {
            title: "Μια Εσωτερική Ματιά: Ο «Γραμμένος Οντάς»",
            content: `
                <p class="slide-text">
                    Ο Πύργος ήταν εντυπωσιακός και στο εσωτερικό του. Ο δεύτερος όροφος (γνωστός ως <strong>οντάς</strong>) ήταν κατάγραφος με τοιχογραφίες, αποδεικνύοντας τον πλούτο και την καλλιτεχνική αίσθηση των ιδιοκτητών του:
                </p>

                <div class="cards-grid">
                    <div class="info-card">
                        <i class="fas fa-crown icon-big"></i>
                        <h3>Βασιλικό Ζεύγος</h3>
                        <p>Μεγάλη τοιχογραφία του <strong>Όθωνα και της Αμαλίας</strong> στον ανατολικό τοίχο</p>
                    </div>
                    <div class="info-card">
                        <i class="fas fa-shield-alt icon-big"></i>
                        <h3>Ο Αχιλλέας</h3>
                        <p>Πίνακας με τον <strong>Αχιλλέα</strong> στον βόρειο τοίχο — ο ήρωας των Φαρσάλων</p>
                    </div>
                    <div class="info-card">
                        <i class="fas fa-leaf icon-big"></i>
                        <h3>Φυτικές Διακοσμήσεις</h3>
                        <p>Διακόσμηση με <strong>φυτικές ταινίες</strong> στις γωνίες του δωματίου</p>
                    </div>
                </div>
            `
        },

        // --------------------------------------------------------
        // SLIDE 7 — Καταστροφή 1943
        // --------------------------------------------------------
        {
            title: "Η Τραγωδία και η Αρχή της Εγκατάλειψης",
            content: `
                <div class="split-grid">
                    <div class="split-column">
                        <p class="slide-text">
                            Η ιστορία του Πύργου γνώρισε μια απότομη και <strong>τραγική καμπή</strong> κατά την περίοδο της Κατοχής. Ο Σωτήρης Καραμίχος πέθανε από τύφο (ή λιμό) το <strong>1942</strong>, μόλις 36 ετών.
                        </p>

                        <p class="slide-text">
                            Το <strong>1943</strong>, η οικογένεια Καραμίχου εγκατέλειψε οριστικά τον Πύργο. Μετά από καταστροφή που υπέστη το 1943, οι περίφημοι ζωγραφισμένοι εσωτερικοί τοίχοι <strong>ασβεστώθηκαν</strong>, χάνοντας έτσι την αρχική τους διακόσμηση.
                        </p>
                    </div>

                    <div class="split-column">
                        <div class="highlight-box red">
                            <h3 class="box-title"><i class="fas fa-exclamation-triangle"></i> Η Τραγωδία του 1943</h3>
                            <ul class="bullet-list">
                                <li>Θάνατος Σωτήρη Καραμίχου (1942)</li>
                                <li>Εγκατάλειψη του Πύργου (1943)</li>
                                <li><strong>Ασβέστωση</strong> των τοιχογραφιών</li>
                            </ul>
                        </div>

                        <div class="quote-box">
                            <p>«Μέσα σε ένα χρόνο χάθηκαν και ο άνθρωπος και οι τοιχογραφίες που εκείνος αγαπούσε.»</p>
                        </div>
                    </div>
                </div>
            `
        },

        // --------------------------------------------------------
        // SLIDE 8 — Σεισμός 1954
        // --------------------------------------------------------
        {
            title: "Μετά τον Πόλεμο: Ο Σεισμός του 1954",
            content: `
                <p class="slide-text">
                    Μετά την αποχώρηση των Καραμίχου, ο Πύργος παρέμεινε κλειστός μέχρι το <strong>1945</strong>, οπότε τον ενοικίασε η οικογένεια Σίμου. Ωστόσο, η παραμονή τους ήταν βραχύβια.
                </p>

                <div class="highlight-box red">
                    <h3 class="box-title"><i class="fas fa-house-damage"></i> Ο Καταστροφικός Σεισμός του 1954</h3>
                    <p class="box-text">Ο σεισμός του 1954 που έπληξε την περιοχή, ήταν το <strong>τελικό χτύπημα</strong>. Έκτοτε, ο Πύργος έμεινε κλειστός και αργότερα παντελώς <strong>εγκαταλελειμμένος</strong> για δεκαετίες.</p>
                </div>

                <div class="cards-grid">
                    <div class="info-card">
                        <i class="fas fa-door-closed icon-big"></i>
                        <h3>1945</h3>
                        <p>Ενοικίαση από την <strong>οικογένεια Σίμου</strong></p>
                    </div>
                    <div class="info-card">
                        <i class="fas fa-bolt icon-big"></i>
                        <h3>1954</h3>
                        <p>Καταστροφικός <strong>σεισμός</strong> στην περιοχή</p>
                    </div>
                    <div class="info-card">
                        <i class="fas fa-clock icon-big"></i>
                        <h3>1954-2000s</h3>
                        <p>Δεκαετίες <strong>εγκατάλειψης</strong></p>
                    </div>
                </div>
            `
        },

        // --------------------------------------------------------
        // SLIDE 9 — Αναγέννηση
        // --------------------------------------------------------
        {
            title: "Η Αναγέννηση: Δωρεά και Αναστύλωση",
            content: `
                <div class="split-grid">
                    <div class="split-column">
                        <p class="slide-text">
                            Ευτυχώς, η ιστορία του δεν τελείωσε με την εγκατάλειψη. Ο Πύργος πέρασε στα χέρια του <strong>Δήμου Φαρσάλων</strong>, ο οποίος προχώρησε σε εκτεταμένες εργασίες συντήρησης και αναστύλωσης, με στόχο να τον μετατρέψει σε <strong>κέντρο πολιτισμού</strong>.
                        </p>

                        <div class="highlight-box amber">
                            <h3 class="box-title"><i class="fas fa-tools"></i> Το Έργο της Αναστήλωσης</h3>
                            <p class="box-text">Η αναστήλωση του Πύργου αποτέλεσε <strong>σημαντικό έργο πολιτιστικής ανάπλασης</strong> για την περιοχή των Φαρσάλων.</p>
                        </div>
                    </div>

                    <div class="split-column">
                        <div class="timeline">
                            <div class="timeline-item">
                                <p class="timeline-year">1954</p>
                                <p class="timeline-text">Εγκατάλειψη μετά τον σεισμό</p>
                            </div>
                            <div class="timeline-item">
                                <p class="timeline-year">2000s</p>
                                <p class="timeline-text">Πέρασε στον <strong>Δήμο Φαρσάλων</strong></p>
                            </div>
                            <div class="timeline-item">
                                <p class="timeline-year">2023</p>
                                <p class="timeline-text"><strong>Εγκαίνια</strong> αναστηλωμένου Πύργου</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        // --------------------------------------------------------
        // SLIDE 10 — Σύγχρονος Ρόλος
        // --------------------------------------------------------
        {
            title: "Ο Πύργος Σήμερα: Ένας Φάρος Πολιτισμού",
            content: `
                <p class="slide-text">
                    Ο αναστηλωμένος Πύργος του Καραμίχου αποτελεί πλέον ένα <strong>επισκέψιμο, επιβλητικό ιστορικό μνημείο</strong>. Φιλοξενεί το:
                </p>

                <div class="highlight-box blue">
                    <h3 class="box-title"><i class="fas fa-camera"></i> Κέντρο Ψηφιακής Φωτογραφίας Νεότερης Τοπικής Ιστορίας</h3>
                    <p class="box-text">Εγκαινιάστηκε τον <strong>Ιούνιο του 2023</strong>, συνδυάζοντας την παράδοση με τις νέες διαδραστικές τεχνολογίες.</p>
                </div>

                <div class="image-container">
                    <img src="https://raw.githubusercontent.com/conchr/Karamichos-Tower/main/%CE%9A%CE%B1%CF%81%CE%B1%CE%BC%CE%AF%CF%87%CE%BF%CF%824.jpg"
                         alt="Ο αναστηλωμένος Πύργος του Καραμίχου σήμερα" class="clickable-image">
                    <p class="image-hint"><i class="fas fa-search-plus"></i> Κάντε κλικ για μεγέθυνση</p>
                </div>
            `
        },

        // --------------------------------------------------------
        // SLIDE 11 — Διαδραστική Εμπειρία
        // --------------------------------------------------------
        {
            title: "Η Διαδραστική Εμπειρία",
            content: `
                <p class="slide-text">
                    Σήμερα, ο Πύργος προσφέρει μια <strong>μοναδική εμπειρία</strong> στον επισκέπτη, επιτρέποντάς του να ταξιδέψει στη νεότερη ιστορία των Φαρσάλων:
                </p>

                <div class="cards-grid">
                    <div class="info-card">
                        <i class="fas fa-tablet-alt icon-big"></i>
                        <h3>Διαδραστικές Εφαρμογές</h3>
                        <p>Χρήση ψηφιακής τεχνολογίας για την προβολή της τοπικής ιστορίας</p>
                    </div>
                    <div class="info-card">
                        <i class="fas fa-scroll icon-big"></i>
                        <h3>Ιστορικά Τεκμήρια</h3>
                        <p>Φιλοξενεί ανεκτίμητης αξίας <strong>οθωμανικά φιρμάνια</strong></p>
                    </div>
                    <div class="info-card">
                        <i class="fas fa-images icon-big"></i>
                        <h3>Συλλογές</h3>
                        <p>Σπάνιες φωτογραφίες και παραδοσιακές φορεσιές των Φαρσάλων</p>
                    </div>
                </div>

                <div class="highlight-box green">
                    <p class="box-text"><strong>Ο Πύργος Καραμίχου είναι πλέον ανοιχτός στο κοινό</strong>, λειτουργώντας ως ζωντανή κιβωτός μνήμης.</p>
                </div>
            `
        },

        // --------------------------------------------------------
        // SLIDE 12 — Τέλος
        // --------------------------------------------------------
        {
            title: "Σας Ευχαριστούμε",
            content: `
                <div class="final-card">
                    <h3><i class="fas fa-chess-rook"></i> Τέλος Παρουσίασης</h3>
                    <p>Ελπίζουμε να σας ενέπνευσε να μάθετε περισσότερα για το σημαντικό πολιτιστικό μνημείο των Φαρσάλων και να το επισκεφτείτε προσωπικά.</p>
                    <p style="font-family: 'Cormorant Garamond', Georgia, serif; font-style: italic; color: var(--gold-light); font-size: 1.1em;">
                        «Για περισσότερες πληροφορίες, επισκεφτείτε τον Πύργο του Καραμίχου στα Φάρσαλα»
                    </p>
                </div>

                <div class="image-container">
                    <img src="https://raw.githubusercontent.com/conchr/Karamichos-Tower/main/%CE%9A%CE%B1%CF%81%CE%B1%CE%BC%CE%AF%CF%87%CE%BF%CF%826.jpg"
                         alt="Εσωτερικό του Πύργου" class="clickable-image">
                    <p class="image-hint"><i class="fas fa-search-plus"></i> Κάντε κλικ για μεγέθυνση</p>
                </div>
            `
        }

    ];

    // --------------------------------------------------------
    // DOM REFERENCES
    // --------------------------------------------------------
    const slidesContainer = document.getElementById('slides-container');
    const prevBtn         = document.getElementById('prevBtn');
    const nextBtn         = document.getElementById('nextBtn');
    const progressBar     = document.getElementById('progress-bar');
    const currentPageSpan = document.getElementById('currentPage');
    const totalPagesSpan  = document.getElementById('totalPages');
    const modal           = document.getElementById('imageModal');
    const modalImage      = document.getElementById('modalImage');
    const closeModalBtn   = document.querySelector('.close-modal');

    let currentPageIndex = 1;
    const totalPages = slidesData.length;

    totalPagesSpan.textContent = totalPages;

    // --------------------------------------------------------
    // BUILD SLIDES
    // --------------------------------------------------------
    function buildSlides() {
        slidesData.forEach((slide, idx) => {
            const el = document.createElement('div');
            el.className = 'slide';
            el.id = 'page-' + (idx + 1);

            el.innerHTML = `
                <div class="slide-content">
                    <h2 class="slide-title">${slide.title}</h2>
                    ${slide.content}
                </div>
            `;

            slidesContainer.appendChild(el);
        });

        document.getElementById('page-1').classList.add('active');
        attachImageHandlers();
    }

    // --------------------------------------------------------
    // IMAGE MODAL
    // --------------------------------------------------------
    function attachImageHandlers() {
        document.querySelectorAll('.clickable-image').forEach(img => {
            img.addEventListener('click', () => {
                modalImage.src = img.src;
                modalImage.alt = img.alt || '';
                modal.classList.add('active');
            });
        });
    }

    function closeModal() {
        modal.classList.remove('active');
        modalImage.src = '';
    }

    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target === modalImage) {
            closeModal();
        }
    });

    // --------------------------------------------------------
    // NAVIGATION
    // --------------------------------------------------------
    function updateProgress() {
        const pct = (currentPageIndex / totalPages) * 100;
        progressBar.style.width = pct + '%';
        currentPageSpan.textContent = currentPageIndex;
    }

    function showPage(index) {
        if (index < 1 || index > totalPages) return;

        document.querySelectorAll('.slide').forEach(s => s.classList.remove('active'));

        const target = document.getElementById('page-' + index);
        if (target) {
            target.classList.add('active');
            target.scrollTop = 0;
        }

        currentPageIndex = index;
        prevBtn.disabled = (index === 1);
        nextBtn.disabled = (index === totalPages);

        if (index === totalPages) {
            nextBtn.innerHTML = 'Τέλος';
        } else {
            nextBtn.innerHTML = 'Επόμενη <i class="fas fa-arrow-right"></i>';
        }

        updateProgress();
    }

    function nextPage() {
        if (currentPageIndex < totalPages) showPage(currentPageIndex + 1);
    }

    function prevPage() {
        if (currentPageIndex > 1) showPage(currentPageIndex - 1);
    }

    // --------------------------------------------------------
    // EVENT LISTENERS
    // --------------------------------------------------------
    prevBtn.addEventListener('click', prevPage);
    nextBtn.addEventListener('click', nextPage);

    // Keyboard
    document.addEventListener('keydown', (e) => {
        if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

        if (e.key === 'Escape') {
            if (modal.classList.contains('active')) {
                closeModal();
                return;
            }
        }

        if (e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault();
            nextPage();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prevPage();
        } else if (e.key === 'Home') {
            e.preventDefault();
            showPage(1);
        } else if (e.key === 'End') {
            e.preventDefault();
            showPage(totalPages);
        }
    });

    // Touch swipe
    let touchStartX = 0;
    document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    document.addEventListener('touchend', e => {
        const touchEndX = e.changedTouches[0].screenX;
        const threshold = 50;

        if (touchEndX < touchStartX - threshold && currentPageIndex < totalPages) {
            nextPage();
        } else if (touchEndX > touchStartX + threshold && currentPageIndex > 1) {
            prevPage();
        }
    }, { passive: true });

    // --------------------------------------------------------
    // INITIALIZE
    // --------------------------------------------------------
    buildSlides();
    showPage(1);
});