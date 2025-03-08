var __index = {"config":{"lang":["it"],"separator":"[\\s\\-]+","pipeline":["stopWordFilter"]},"docs":[{"location":"index.html","title":"The Guild","text":"<ul> <li>The Guild<ul> <li>\ud83d\udcda Sezioni<ul> <li>\ud83d\udc27 Linux</li> <li>\u2620\ufe0f Piracy</li> <li>\ud83d\udd75\ufe0f Privacy</li> <li>\ud83d\udcbb Hacking</li> </ul> </li> </ul> </li> </ul> <p>The Guild - o \"La Gilda\" - \u00e8 una societ\u00e0 segreta non tanto legale, il cui scopo \u00e8 la condivisione di informazioni e guide a loro volta non molto legali. L'idea \u00e8 condividere guide ed esperienze nelle diverse Sezioni della setta: apprendetele tutte, e la vostra vita cambier\u00e0 per sempre. Non vedrete pi\u00fa una singola pubblicit\u00e0 sul vostro telefono. Potrete stare certi che la Microsoft non vi stia pi\u00fa rubando dati su di voi. Potrete beneficiare della velocit\u00e0 e bellezza di Linux. E, se volete, hackerare i vostri compagni di classe che vi rompono le scatole.</p>"},{"location":"index.html#sezioni","title":"\ud83d\udcda Sezioni","text":""},{"location":"index.html#linux","title":"\ud83d\udc27 Linux","text":"<p>Per chi usa o vorrebbe imparare/iniziare ad usare Linux</p> <p>Se volete flexare il vostro setup, avete bisogno d'aiuto, o volete dei consigli su come passare da Windows a Linux, potete scrivere nel gruppo dedicato. Il wiki spiega i concetti pi\u00fa importanti e dei tutorial base per iniziare ad usarlo.</p>"},{"location":"index.html#piracy","title":"\u2620\ufe0f Piracy","text":"<p>Per chi vuole navigare i sette mari, con Spotify e YouTube premium in sottofondo.</p> <p>Se volete condividere o richiedere una guida su come piratare qualcosa, scrivetelo nel gruppo. Nel wiki trovate una raccolta con tutte le guide che sono uscite fuori.</p>"},{"location":"index.html#privacy","title":"\ud83d\udd75\ufe0f Privacy","text":"<p>Per chi ha capito che se \u00e8 gratis, il prodotto sei tu, e per chi vuole finalmente sapere perch\u00e9 Chrome \u00e8 da evitare.</p> <p>Nel gruppo potete chiedere domande generali sulla privacy, come quale sia il browser migliore o un buon DNS. Il wiki contiene una guida che spiega sia perch\u00e9 le grandi compagnie sono nostre nemiche, sia come evitare i loro prodotti.</p>"},{"location":"index.html#hacking","title":"\ud83d\udcbb Hacking","text":"<p>Per quelli che pensano che <code>nmap</code> sia un verbo.</p> <p>Potete mandare o richiedere tutotial nel gruppo. Nel wiki trovate delle guide su come usare i diversi tool per il pen-testing.</p> <p>Ricorda: tutto \u00e8 legale finch\u00e9 non ti scoprono.</p>"},{"location":"hacking.html","title":"Hacking","text":"<p>Sezione in arrivo...</p>"},{"location":"linux.html","title":"Linux","text":"<ul> <li>Linux<ul> <li>\u26a1 Introduzione e terminologia</li> <li>\ud83c\udfc6 Che Distro devo scegliere?</li> <li>\ud83d\udd25 Che Desktop Environment devo scegliere?<ul> <li>Scaricare pi\u00f9 DE</li> </ul> </li> <li>\ud83d\ude4f Installare Linux</li> <li>\ud83d\udce6 Le repository e la AUR</li> <li>\ud83d\udcc2 I file</li> <li>\ud83d\udee0\ufe0f yay<ul> <li>Cercare pacchetti</li> <li>Scaricare pacchetti</li> <li>Aggiornare il computer</li> </ul> </li> <li>\ud83c\udfae Gaming</li> </ul> </li> </ul>"},{"location":"linux.html#introduzione-e-terminologia","title":"\u26a1 Introduzione e terminologia","text":"<ul> <li>Un Sistema Operativo \u00e8 composto da centinaia di \"pezzi\"/programmi diversi.</li> <li>Il Kernel \u00e8 il pezzo pi\u00fa importante che comunica direttamente col vostro Hardware.</li> <li>Linux \u00e8 un Kernel, non un Sistema Operativo. Tutti i programmi del PC vengono eseguiti sopra il Kernel. Linux in s\u00e9 non basta, servono altri pezzi sopra di lui per poter usare il PC. \u00c8 come la CPU, non ci fate niente senza ma nemmeno se avete solo quella.</li> <li>Le Distribuzioni (o Distro) sono \"pacchetti\" che contengono Linux e tutti i pezzi che gli servono per funzionare sopra perch\u00e9 la gente \u00e8 troppo pigra per leggere un libro da 300 pagine su come scaricarli a mano. Sono come marche di computer gi\u00e0 costruiti. Se uno dei pezzi che viene preinstallato nella vostra Distro non vi piace, potete cambiarlo con un altro.</li> <li>Il Desktop Environment (o DE) \u00e8 un altro pezzo (composto a sua volta da altri sottoprogrammi) che vi consente di avere un interfaccia grafica con finestre e tutto invece di un terminale e basta.</li> <li>Il Window Manager (o WM) \u00e8 una delle parti del DE che crea le finestre. Vedremo dopo perch\u00e9 pu\u00f3 essere importante sapere cos'\u00e8.</li> <li>Il Package Manager \u00e8 un programma, solitamente da terminale, per scaricare e gestire programmi e pezzi del vostro sistema.</li> </ul>"},{"location":"linux.html#che-distro-devo-scegliere","title":"\ud83c\udfc6 Che Distro devo scegliere?","text":"<p>Debian e Arch sono le due Distribuzioni pi\u00fa importanti. Non perch\u00e9 sono le pi\u00fa usate, ma perch\u00e9 il 90% delle Distro sono basate su di loro. Per esempio, Ubuntu, Mint e Kali sono basati su Debian, mentre Endeavour e Manjaro sono basati su Arch. Le differenze pi\u00fa importanti tra Distribuzioni derivate da uno o dall'altra sono:</p> <ul> <li>Gli aggiornamenti: Debian, e i suoi derivati, sono delle Distribuzioni dette a stable release, mentre la famiglia Arch \u00e8 a rolling release. Debian usa un sistema di versioni a cui molti di voi saranno pi\u00fa abituati; per esempio, Ubuntu \u00e8 al momento alla versione 24.10. Ogni versione del sistema arriva con delle versioni dei programmi installati preconfigurati e testati prima di essere pubblicate. Per esempio, KUbuntu (una versione di Ubuntu che usa KDE Plasma) \u00e8 passata a Plasma 6 pochi mesi fa, anche se quest'ultimo \u00e8 uscito da anni. Le distro rolling release, invece, vi assicurano sempre l'ultima versione di ogni programma sul vostro PC. Per questo, ci sono letteralmente aggiornamenti ogni 5 minuti. Mentre le stable release sono pi\u00fa stabili e hanno meno bug, le rolling release vi consentono di non perdere mai un singolo aggiornamento.</li> <li>Il package manager: Debian usa <code>apt</code>, mentre Arch usa <code>pacman</code>. Arch, inoltre, supporta la AUR (trovate informazioni a riguardo qua sotto), che permette di scaricare programmi esotici come driver e altre cose senza configurazioni strane.</li> </ul> <p>Detto ci\u00f3, quale lato dovreste scegliere? Se siete informatici e siete disposti a perdere un po' di tempo a sistemare il vostro PC, andate con Arch. Se, invece, non avete mai visto un terminale, andate con Debian.</p> <p>Una volta scelto se andare sul lato Debian o sul lato Arch, \u00e8 il momento di scegliere effettivamente una delle distro basate su di loro:</p> DebianArch Linux Linux MintUbuntuDebian <p>La scelta migliore per chi non studia informatica. \u00c8 la pi\u00fa semplice da imparare per ex-utenti Windows, \u00e8 leggera, ha la grafica settata bene ed \u00e8 face da usare.</p> <p>La distro pi\u00fa semplice da usare in assoluto, con supporto per praticamente qualsiasi PC, ma odiata dalla community. \u00c8 \"bloated\", nel senso che arriva con davvero tanti programmi per soddisfare le esigenze di tutti. \u00c8 abbastanza pesante, quindi \u00e8 sconsigliata su PC pi\u00fa vecchi. Se avete un PC buono e volete solo imparare come funziona Linux, scaricatela pure: ma vedete di cambiarla appena ci fate l'abitudine.</p> <p>L'originale. \u00c8 pi\u00fa complessa da usare rispetto a Mint e Ubuntu, e potrebbe non essere una buona idea se non avete le minime basi informatiche. Se, invece, sapete qualcosina sui computer ma non abbastanza da usare Arch, potrebbe essere un'ottima scelta per voi. \u00c8 leggerissima e molto stabile, anche se le versioni di alcuni programmi sono pi\u00fa vecchi di vostra nonna.</p> EndeavourOSArch Linux <p>Arch Linux senza il dramma esistenziale. Se sapete usare un terminale, \u00e8 perfetta per voi. Non \u00e8 difficile da usare se sapete cosa state facendo. \u00c8 leggera, sicura, supporta NVIDIA direttamente dal download, creata e mantenuta dalla community, e sebbene sia rolling release non si sente parlare di bug in giro. Non ve ne pentirete.</p> <p>Il punto di non ritorno </p> <p>\u00c8 la distribuzione pi\u00fa difficile da installare e usare dopo Gentoo, tanto che \u00e8 un meme nella community. Non avete un programma grafico per installarlo, bens\u00ed un terminale, dal quale dovrete fare tutto voi: formattare il disco, settare la locale, scaricare i programmi di bootstrap, installare il DE, e chi ne ha ne metta. Provatela solo quando sarete diventati tutt'uni con Linux - o quando vi sentirete avventurosi.</p> <p>Ovviamente esistono altre centinaia - se non migliaia - di distribuzioni diverse da quelle elencate. Sentitevi liberi di fare le vostre ricerche e trovare la pi\u00fa adatta a voi.</p>"},{"location":"linux.html#che-desktop-environment-devo-scegliere","title":"\ud83d\udd25 Che Desktop Environment devo scegliere?","text":"<p>Il Desktop Environment \u00e8 la parte che presenta la grafica del vostro computer: \u00e8 colui che determiner\u00e0 effetivamente l'aspetto del PC. Tutti questi DE possono essere scaricati su qualsiasi distro. Alcuni Desktop Environment importanti sono:</p> GNOMEKDE PlasmaXFCEHyprland <p></p> <p>GNOME \u00e8 un DE molto bello da vedere, anche di default, con un'interfaccia simile a quella del Mac. \u00c8 stabile e supporta diverse estensioni, ma allo stesso tempo il modo di utilizzo \u00e8 diverso (ci vuole un po' per abituarsi) e la customizzazione \u00e8 leggermente limitata rispetto ad altre alternative. Nonstante ci\u00f3, il design sia del Desktop che delle sue app \u00e8 davvero fantastico. \u00c8 leggermente pesante, occupa circa 1 o 2 giga su disco, e quindi non \u00e8 consigliato per PC pi\u00fa vecchi.</p> <p></p> <p>Plasma \u00e8 un DE un po' meno carino di default, ma customizzabile come la morte. Potete SERIAMENTE farlo diventare uguale a Windows o a Mac. Ha un'interfaccia molto simile a Windows e quindi semplice da usare (anzi, Microsoft ha rubato tante funzionalit\u00e0 da Plasma e le ha messe su Windows). Anch'esso \u00e8 pesantuccio, sempre su 1/2GB di archiviazione, e quindi non adatto a computer meno recenti.</p> <p></p> <p>XFCE \u00e8 un DE molto basico ma anche leggero. Forse non \u00e8 il pi\u00f9 bello di tutti, ma pesa pochissimo (121Mb, app incluse) ed \u00e8 perfetto per chi ha un PC pi\u00f9 vecchio. Anch'esso ricorda quasi l'interfaccia di qualche versione vecchia di Windows e pertanto non \u00e8 troppo difficile imparare ad usarlo. Non lasciatevi ingannare, per\u00f3: con un po' di determinazione potete customizzarlo e farlo diventare davvero bello.</p> <p></p> <p>Hyprland \u00e8 una cosa a parte. Non \u00e8 un DE, bens\u00ec un Window Manager (o WM, come accennato prima). Il WM \u00e8 uno dei tanti componenti di un DE, il quale si occupa di creare e mostrare le finestre sul vostro Desktop. Hyprland \u00e8 solamente un WM, nel senso che se lo installate avrete letteralmente solo finestre sul vostro PC. Niente barra delle applicazioni, niente programma per le impostazioni, niente notifiche, niente popup quando dovete inserire la password, niente barra del titolo con tasto di chiusura, nulla. Solo il vostro mouse, e le finestre che aprite. Se volete aprire un programma, con Win+Q aprite un terminale ed eseguite il programma da l\u00ec. Per di pi\u00f9, \u00e8 un tiling Window Manager, cio\u00e8 le finestre non sono libere di muoversi ma sono \"snappate\" a griglia, come nella foto. Ovviamente potete scegliere quale finestra sta dove, e con qualche programma potete renderle libere, ma la base \u00e8 questa. Ovviamente un PC cos\u00ec \u00e8 inutilizzabile (o meglio, semplicemente molto scomodo); potete scaricarci i diversi pezzi mancanti sopra per aggiungere le funzionalit\u00e0 che mancano, come un notification daemon per vedere i popup delle vostre notifiche, waybar per avere una barra delle applicazioni o una topbar come su GNOME, hyprpaper per mettere gli sfondi che volete, etc. Un'altra pecca \u00e8 che dovete configurare tutto a mano, nel senso che non esistono applicazioni grafiche per le impostazioni di Hyprland, Waybar, Hyprpaper e compagnia: dovete aprire un file <code>.conf</code> o qualsiasi mistico formato il vostro programma usa, e modificarlo da l\u00ec. Vi starete chiedendo: perch\u00e9 soffrire tanto? Un paio di ragioni includono:</p> <ul> <li>\u00c8 leggerissimo: pesa 60Mb su disco, ed essendo solo un WM influisce molto di meno sulla RAM. Il vostro PC non lo sentir\u00e0 neanche;</li> <li>\u00c8 adattivo: visto che voi installate solo i pezzi che vi servono e che volete, nessuno bit dello spazio occupato sul vostro distro viene sprecato: con un DE come GNOME, avete centinaia se non migliaia di funzionalit\u00e0 e programmi che non utilizzate, non perch\u00e9 i creatori di GNOME siano cattivi ma perch\u00e9 sono stati messi per rendere GNOME il pi\u00f9 semplice da usare per tutti. Con Hyprland, invece, ogni microscopico programma che installate \u00e8 qualcosa che vi serve, risultando in un PC con il minimo indispensabile;</li> <li>\u00c8 fighissimo: \u00e8 stato creato da un utente di r/unixporn su Reddit (qui il post del bastardo), in risposta a tutti i rice che venivano pubblicati, e il suo scopo pricipale \u00e8 essere figo. Le cose che potete creare sono mozzafiato.</li> </ul>"},{"location":"linux.html#scaricare-piu-de","title":"Scaricare pi\u00f9 DE","text":"<p>Guida in arrivo...</p>"},{"location":"linux.html#installare-linux","title":"\ud83d\ude4f Installare Linux","text":"<p>Guida in arrivo...</p>"},{"location":"linux.html#le-repository-e-la-aur","title":"\ud83d\udce6 Le repository e la AUR","text":"<p>I Package Manager scaricano i pacchetti da delle repository, cio\u00e8 degli \"indici\" che specificano dove sono installati questi pacchetti. Su sistemi basati su Debian, per scaricare molti programmi, si deve aggiungere la loro repository ad <code>apt</code> se il programma non \u00e8 incluso in quelle di sistema. Su Arch, invece, esiste una repository speciale chiamata AUR, dove qualsiasi utente pu\u00f3 pubblicare il suo programma/pacchetto esotico o la versione beta di uno esistente. Si trova davvero di tutto nella AUR. La AUR non \u00e8 integrata dentro <code>pacman</code>, bens\u00ec vi si deve accedere con un AUR helper, cio\u00e8 un Package Manager che appunto permette di scaricare pacchetti dalla AUR. Il pi\u00f9 famoso e pi\u00f9 utilizzato \u00e8 <code>yay</code>.</p>"},{"location":"linux.html#i-file","title":"\ud83d\udcc2 I file","text":"<p><code>~</code> \u00e8 la vostra cartella home, l'equivalente di <code>C:\\Users\\USERNAME</code> su Windows. \u00c8 un alias per <code>/home/USERNAME</code>. Sotto <code>~/Desktop</code> (o <code>/home/USERNAME/Desktop</code>) trovate il Desktop, su <code>~/Downloads</code> i Download, etc. Sotto <code>/home</code> trovate tutti gli utenti. <code>/</code> \u00e8 la cartella root che contiene tutti i file di Linux. Niente di particolarmente difficile.</p>"},{"location":"linux.html#yay","title":"\ud83d\udee0\ufe0f <code>yay</code>","text":"Attenzione <p>Questa sezione riguarda solo le distribuzioni basate su Arch.</p> Nota <p><code>yay</code> \u00e8 pre-installato su EndeavourOS.</p> <p>Per scaricare <code>yay</code>:</p> <pre><code>cd /tmp\nsudo pacman -Syu git base-devel\ngit clone https://aur.archlinux.org/yay.git\ncd yay\nmakepkg -si\n</code></pre>"},{"location":"linux.html#cercare-pacchetti","title":"Cercare pacchetti","text":"<p>Digitate semplicemente il nome del pacchetto che volete cercare:</p> <p><code>yay &lt;package&gt;</code></p>"},{"location":"linux.html#scaricare-pacchetti","title":"Scaricare pacchetti","text":"<p>Per scaricare un pacchetto:</p> <p><code>yay -S &lt;package&gt;</code></p> <p>Molte volte <code>yay</code> vi far\u00e0 tante domande, e se non sapere cosa vi sta chiedendo \u00e8 meglio lasciare le opzioni che vi da di default. Per farlo, passate <code>--noconfirm</code> al comando:</p> <p><code>yay -S &lt;package&gt; --noconfirm</code></p>"},{"location":"linux.html#aggiornare-il-computer","title":"Aggiornare il computer","text":"<p>Per aggiornare tutti i programmi sul PC, basta scrivere:</p> <p><code>yay</code></p> <p>Potete anche aggiungere <code>--noconfirm</code>:</p> <p><code>yay --noconfirm</code></p> <p>Potete aggiornare il PC mentre scaricate un pacchetto:</p> <p><code>yay -Syu &lt;package&gt;</code></p> <p>E mescolare il tutto:</p> <p><code>yay -Syu &lt;package&gt; --noconfirm</code></p>"},{"location":"linux.html#gaming","title":"\ud83c\udfae Gaming","text":"<p>Guida in arrivo...</p>"},{"location":"piracy.html","title":"Piracy","text":"<ul> <li>Piracy<ul> <li>\u2757 Importante</li> <li>\ud83e\uddca Minecraft</li> <li>\ud83c\udfae Giochi (PC)</li> <li>Film, serie TV e anime</li> </ul> </li> </ul>"},{"location":"piracy.html#importante","title":"\u2757 Importante","text":"<p>Usate Firefox con uBlock Origin. Questo \u00e8 OBBLIGATORIO.</p> <p>Per craccare i giochi su PC, vi potrebbe servire 7-Zip.</p>"},{"location":"piracy.html#minecraft","title":"\ud83e\uddca Minecraft","text":"<p>Scaricate Prism Launcher. Se vi chiede quanta RAM allocare, mettete la met\u00e0 o 3/4 di quella che avete nel vostro PC. Se avete comprato Minecraft su un account Microsoft, effettuate il login durante questa fase e siete a posto. Altrimenti continuate senza account, poi chiudete Prism ed eseguite uno dei seguenti comandi in un terminale:</p> LinuxMacWindows <pre><code>echo '{\"accounts\": [{\"entitlement\": {\"canPlayMinecraft\": true,\"ownsMinecraft\": true},\"type\": \"MSA\"}],\"formatVersion\": 3}' &gt; ~/.local/share/PrismLauncher/accounts.json\n</code></pre> <pre><code>echo '{\"accounts\": [{\"entitlement\": {\"canPlayMinecraft\": true,\"ownsMinecraft\": true},\"type\": \"MSA\"}],\"formatVersion\": 3}' &gt; ~/Library/Application\\ Support/PrismLauncher/accounts.json\n</code></pre> <pre><code>echo {\"accounts\": [{\"entitlement\": {\"canPlayMinecraft\": true,\"ownsMinecraft\": true},\"type\": \"MSA\"}],\"formatVersion\": 3} &gt; %appdata%/PrismLauncher/accounts.json\n</code></pre> <p>Riaprite Prism, cliccate su \"Accounts\" -&gt; \"Add account\".</p>"},{"location":"piracy.html#giochi-pc","title":"\ud83c\udfae Giochi (PC)","text":"<p>Trovate diversi siti per scaricare giochi craccati:</p> <ul> <li>SteamRip</li> <li>GOG Games</li> <li>Game Bounty</li> <li>Anker Games</li> </ul> <p>Trovate il gioco che volete e scaricatelo. Sar\u00e0 dentro un file <code>.zip</code> o <code>.rar</code>: estraetelo con 7-Zip. Otterrete una cartella col gioco preinstallato. Non dovete fare altro che piazzarla dove vi pare e aprire il gioco <code>.exe</code> che si trova dentro la cartella. Potete anche trascinare il gioco <code>.exe</code> sul vostro Desktop tenendo premuto Alt per creare un'icona da cui lanciarlo.</p> <p>Istruzioni per utenti Linux in arrivo.</p>"},{"location":"piracy.html#film-serie-tv-e-anime","title":"Film, serie TV e anime","text":"<p>Attenzione</p> <p>Questa guida \u00e8 temporanea. Verr\u00e0 rimpiazzata con una migliore in futuro. Per adesso, potete leggere una guida pi\u00fa corposa ma dettagliata qui (ignoratelo quando parla del Debrid).</p> <p>Nota</p> <p>Potrete guardare qualsiasi filn, anime k serie TV, ma al monento solo in inglese.</p> <p>Questa guida vale sia per telefoni (Android) che per Smart TV (Android/Google TV, Amazon Fire Stick e NVIDIA Shield TV).</p> <ol> <li>Scaricate Stremio dal Play Store sul vostro telefono (nota: dovete farlo da telefono prima di farlo sulla TV).</li> <li>Apritelo e createvi un account.</li> <li>Andate su questo sito.</li> <li>Inserite le vostre credenziali (se il login ha avuto successo, del testo verr\u00e0 inserito dentro la cella \"Paste Stremio AuthKey here...\". Se non si riempie, le credenziali sono errate).</li> <li>Cliccate su \"Load Addons Preset\".</li> <li>Cliccate su \"Sync to Stremio\".</li> </ol> <p>Ora potete scaricare Stremio sulla vostra TV e iniziare ad usarlo.</p>"},{"location":"privacy.html","title":"Privacy","text":"<p>Sezione in arrivo...</p>"}]}