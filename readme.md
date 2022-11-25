# Aplikace na rezervaci stolů

## Představení aplikace

### Architektura

Aplikaci můžeš pojmout, jak ti to bude vyhovovat. Chceš udelat **webovou, mobilní nebo desktopovou** aplikaci? **Monolit** nebo mít zvlášť **frontend a backend** jako separátní službu? Je to na tobě :)

### Technologie

I zde máš volnou ruku. Přesto bychom doporučili moc neexperimentovat a zvolit si stack technologií, se kterými už máš nějaké zkušenosti. Kromě volby samotného programovacího jazyku a technologie pro ukládání dat, by se tobě i tvým kolegům mohly hodit další dnes už nezbytní pomocníci jako [Git](https://git-scm.com/) (nebo jiný verzovací systém) a třeba šikovný komunikátor jako [Slack](https://slack.com/).

### Metodika vývoje

K vývoji softwaru můžeš obecně přistupovat různě. Vzhledem k časovému pressu si nejspíš zvolíš agilní přístup k vývoji. To, jak si rozvrhneš s kolegy práci (např. na rozdělení úkolů pomocí nějakého software pro issue tracking/organizaci úkolů) a jak budete postupovat, je důležité nejen pro úspěšné dokončení projektu, ale zároveň to budeme brát v potaz i při hodnocení :)

### Nasazení (deploy) aplikace

Aplikaci není potřeba nikam nasazovat. Pokud nám ji při prezentaci pustíš na vlastním stroji, tak nám to bude stačit. Pokud máš přístup ke studentským účtům např. na AWS nebo Azure a aplikaci nasadíš takto, tak nás jedině mile překvapíš :)

Co ovšem **určitě budeme chtít, jsou zdrojové kódy aplikace**. Ať už nám to dovalíš na flashce nebo nám pošleš odkaz na Git repozitář (na mail jan.klimes@hella.com), tak je to na tobě.

## Požadavky na aplikaci

### Základní funkce

Tyto funkce by aplikace měla implementovat, takže se na jejich dodržení zaměř.

*Specifikace místností / stolů*
- [ ] Správa stolů / místností
- [ ] Možnost nastavit vybavení pro jednotlivé stoly (typ dokovací stanice, speciální monitory, a další)
- [ ] Možnost zablokovat určité stoly pro rezervace v určité dny / období

*Rezervace stolů*
- [ ] Vyhledávání / filtrování dostupných stolů podle data
- [ ] Možnost vytvořit rezervaci stolu  
- [ ] Možnost zrušit rezervaci stolu
- [ ] Možnost požádat uživatele o setkání v konkrétní datum (+ notifikace)
- [ ] Možnost vytvořit rezervaci více stolů / místnosti za účelem workshopu (nutno schválit administrátorem)

*Uživatelé*
- [ ] Přihlašování uživatele na základě přihlašovacího jména, hesla (případně emailu)
- [ ] Možnost spravovat základní informace o vlastním účtu (změna emailu, telefonu, avatara, atd.)
- [ ] Nastavení sledování konkrétních uživatelů (nutno potvrdit daným uživatelem) - u sledovaného uživatele dostanete notifikaci při provedené rezervaci na konkrétní den daným uživatelem.
- [ ] Nastavení pro preferované stoly na základě určitého druhu vybavení (zohledněno při filtrování stolů)
  
*Uživatelské role*
- [ ] Vhodně zvolené uživatelské role s různými právy přístupu a správy systému
- [ ] Rozlišení alespoň dvou rolí: uživatel a administrátor

*Notifikace*
- [ ] Upozornění v případě zrušení vytvořené rezervace administrátorem
- [ ] Upozornění pro blížící se datum s rezervací stolu (možno vypnout v uživatelském profilu)
- [ ] Upozornění v případě, že někdo zadal žádost o setkání v určité datum
  
### Doplňkové funkce

*Rezervace stolů*
- [ ] zavedení limitů na počet nadcházejících rezervací (vhodně zvolené množství rezervací) na jednoho uživatele
- [ ] vizuální označení stolu v místnosti (např. interaktivní mapa/plánek v aplikaci nebo použití telefonu pro ověření zvoleného stolu)
 
*Statistická data*
- [ ] Přehled o vytížení stolů v rámci přehledu 
- [ ] Přehled o tom, kteří uživatelé si stoly rezervují nejčastěji

*Uživatelské rozhraní aplikace*
- [ ] použití barev, loga a typografických prvků podle grafického manuálu Forvia/Hella
- manuál najdeš v tomto repozitáři

### A další doplňkové funkce.. :)

**Můžeš nás překvapit jakoukoliv dalši doplňkovou funkcionalitou, která tě napadne. Fantazii se meze nekladou a za originalitu by určitě byly nějaké kladné body při hodnocení** :)