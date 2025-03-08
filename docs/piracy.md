# Piracy

[TOC]

---

## **❗ Importante**

**Usate [Firefox](https://mozilla.org/firefox/new/) con [uBlock Origin](https://addons.mozilla.org/firefox/addon/ublock-origin/).**
**Questo è OBBLIGATORIO.**

Per craccare i giochi su PC, vi potrebbe servire [7-Zip](https://www.7-zip.org/).

---

## **🧊 Minecraft**

Scaricate [Prism Launcher](https://prismlauncher.org/download/).
Se vi chiede quanta RAM allocare, mettete la metà o 3/4 di quella che avete nel vostro PC.
Se avete comprato Minecraft su un account Microsoft, effettuate il login durante questa fase e siete a posto.
Altrimenti continuate senza account, poi chiudete Prism ed eseguite uno dei seguenti comandi in un terminale:

=== "Linux"

	```bash
	echo '{"accounts": [{"entitlement": {"canPlayMinecraft": true,"ownsMinecraft": true},"type": "MSA"}],"formatVersion": 3}' > ~/.local/share/PrismLauncher/accounts.json
	```

=== "Mac"

	```bash
	echo '{"accounts": [{"entitlement": {"canPlayMinecraft": true,"ownsMinecraft": true},"type": "MSA"}],"formatVersion": 3}' > ~/Library/Application\ Support/PrismLauncher/accounts.json
	```

=== "Windows"

	```batch
	echo {"accounts": [{"entitlement": {"canPlayMinecraft": true,"ownsMinecraft": true},"type": "MSA"}],"formatVersion": 3} > %appdata%/PrismLauncher/accounts.json
	```

Riaprite Prism, cliccate su "Accounts" -> "Add account".

---

## **🎮 Giochi (PC)**

Trovate diversi siti per scaricare giochi craccati:

* [SteamRip](https://steamrip.com/)
* [GOG Games](https://gog-games.to/)
* [Game Bounty](https://gamebounty.world/)
* [Anker Games](https://ankergames.net/)

Trovate il gioco che volete e scaricatelo. Sarà dentro un file `.zip` o `.rar`: estraetelo con 7-Zip.
Otterrete una cartella col gioco preinstallato.
Non dovete fare altro che piazzarla dove vi pare e aprire il gioco `.exe` che si trova dentro la cartella.
Potete anche trascinare il gioco `.exe` sul vostro Desktop tenendo premuto Alt per creare un'icona da cui lanciarlo.

Istruzioni per utenti Linux in arrivo.

## **Film, serie TV e anime**

!!! warning "Attenzione"
	Questa guida è temporanea. Verrà rimpiazzata con una migliore in futuro.
	Per adesso, potete leggere una guida piú corposa ma dettagliata [qui](https://guides.viren070.me/stremio) (ignoratelo quando parla del Debrid).
!!! info "Nota"
	Potrete guardare qualsiasi filn, anime k serie TV, ma al monento solo in inglese.

Questa guida vale sia per telefoni (Android) che per Smart TV (Android/Google TV, Amazon Fire Stick e NVIDIA Shield TV).

1. Scaricate **Stremio** dal Play Store sul vostro telefono (nota: dovete farlo da telefono prima di farlo sulla TV).
2. Apritelo e createvi un account.
3. Andate su [questo sito](https://stremio-account-bootstrapper.vercel.app/).
4. Inserite le vostre credenziali (se il login ha avuto successo, del testo verrà inserito dentro la cella "Paste Stremio AuthKey here...". Se non si riempie, le credenziali sono errate).
5. Cliccate su "Load Addons Preset".
6. Cliccate su "Sync to Stremio".

Ora potete scaricare Stremio sulla vostra TV e iniziare ad usarlo.
