// ==============================
// ========== PREAMBLE ==========
// ==============================

'use strict';

// ==============================
// ========== LANGUAGE ==========
// ==============================

let lang = module.exports = {
  
  wrd: {
    user: "User",
    preview: "Vorschau",
    event: "Event",
    events: "Events",
    poll: "Abstimmung",
    polls: "Abstimmungen",
    vote: "Stimme",
    votes: "Stimmen",
    allowed: "erlaubt",
    page: "Seite",
    total: "Gesamt",
    filter: "Filter",
    outdated: "Abgelaufen",
    closed: "Geschlossen",
    oninvite: "Mit Einladung",
    deleted: "Gelöscht",
    member: "Teilnehmer",
    day: "Tag",
    month: "Monat",
    year: "Jahr"
  },
  
  btn: {
    create: "Erstellen",
    show: "Anzeigen",
    edit: "Bearbeiten",
    delete: "Löschen",
    undelete: "Wiederherstellen",
    done: "Fertig",
    cancel: "Abbrechen",
    dismiss: "Ausblenden",
    showhelp: "Hilfe anzeigen",
    back: "< Zurück",
    next: "Weiter >",
    yes: "Ja",
    no: "Nein",
    asc: "Aufsteigend",
    desc: "Absteigend",
    all: "Alle",
    plschoose: "Bitte auswählen",
    
    dest: {
      summary: "Übersicht",
      pve: "PvE",
      raids: "Raids",
      pvp: "PvP",
      special: "Spezielle Events",
      vendors: "Händler",
      details: "Details"
    },
    
    evt: {
      join: "Teilnehmen",
      leave: "Verlassen",
      ok: "Ok",
      cancel: "Absagen",
      allevents: "Alle Events",
      comingevents: "Kommende Events",
      outdatedevents: "Abgelaufene Events",
      myevents: "Meine Events",
      title: "Titel",
      text: "Text",
      datetime: "Datum/Zeit",
      members: "Teilnehmer",
      max: "Max. Teilnehmer",
      deletetext: "Text entfernen",
      nomax: "Kein Max."
    },
    
    poll: {
      allpolls: "Alle Abstimmungen",
      openpolls: "Offene Abst.",
      closedpolls: "Geschlossene Abst.",
      mypolls: "Meine Abstimmungen",
      title: "Titel",
      text: "Text",
      answers: "Antworten",
      max: "Max. Stimmen",
      names: "Stimmenliste",
      deletetext: "Text entfernen",
      open: "Abst. öffnen",
      close: "Abst. schließen"
    },
    
    bday: {
      soon: "Kommende Geb.",
      list: "Alle Geburtstage",
      edit: "Geb. bearbeiten",
      noyear: "Kein Jahr anzeigen"
    }
  },
  
  msg: {
    confirm: "Sind Sie sicher?",
    confirmcancel: "Sind Sie sicher, dass Sie den Vorgang abbrechen wollen?",
    
    dest: {
      main: "Destiny | Aktivitäten Übersicht",
      weeklyreset: "Destiny | Wöchtentlicher Reset",
      armsdayupdate: "Destiny | Waffentag Update",
      specialupdate: "Destiny | Spezielle Events Update",
      xurupdate: "Destiny | Xûr Update",
      trialsupdate: "Destiny | Prüfungen von Osiris Update",
      
      activetill: "Aktiv bis:",
      dateformat: "dd, D.M.YYYY, HH:mm [(]z[)]",
      raid: "Raid",
      nochallenge: "Keine Herausforderung",
      recom: "Empfohlen:",
      level: "Level:",
      light: "Licht:",
      warlock: "Warlock",
      titan: "Titan",
      hunter: "Jäger",
      link: "Link",
      stats: "Stats:",
      perks: "Perks:",
      price: "Preis:",
      rewards: "Belohnungen:",
      noactivities: "Keine Aktivitäten verfügbar.",
      nodetails: "Keine Details verfügbar.",
      notactive: "Aktivität ist derzeit nicht aktiv.",
      moreinfo: "Mehr Informationen:",
      
      help: "Folgende Befehle sind verfügbar:\n`/destiny <activity>` : Zeigt Informationen zu der jeweiligen Aktivität an\n\nAktivitäten sind:\n`full`, `list`, `all` : Gesamte Liste an aktuellen Aktivitäten\n`pve` : Gefängnis der Alten, Wöchentliche Story, Strikes, Dämmerungsstrike\n`raid`, `raids` : Raids\n`pvp`, `crucible` : Wöchentliche Schmelztiegelplaylist und Prüfungen von Osiris\n`special`, `events`, `specialevents` : Eisenbanner, Waffentag, Xûr, Prüfungen von Osiris, SRL\n`elder`, `elderchallenge`, `poe` : Gefängnis der Alten\n`story`, `weeklystory`, `mission`, `weeklymission` : Wöchentliche heroische Story-Playlist\n`strikes`, `heroicstrike` : Wöchentliche Strike-Playlist\n`nightfall`, `nf` : Dämmerungsstrike\n`weeklyfeaturedraid`, `weeklyraid` : Wöchentlich empfohlener Raid\n`vaultofglass`, `vog` : Gläserne Kammer\n`crota` : Crota’s Ende\n`kingsfall`, `kf` : Königsfall\n`wrathofthemachine`, `wotm` : Zorn der Maschine\n`weeklycrucible` : Wöchentliche Schmelztiegel-Playlist\n`ironbanner` : Eisenbanner\n`trials` : Prüfungen von Osiris\n`srl` : SRL\n`xur` : Xûr\n`armsday` : Waffentag\n"
    },
    
    evt: {
      main: "Das ist das Hauptmenü für Events.",
      
      entertitle: "Event-Titel eingeben: `/event <title>`",
      entertext: "Event-Text eingeben: `/event <text>` (optional)",
      enterdatetime: "Event-Datum/Zeit eingeben: `/event <DD.MM.YYYY>;<hh:mm>`",
      wrongdatetimeinput: "*Falsches Format!*",
      wrongdatetimestamp: "*Datum/Zeit muss mindestens 30 Minuten in der Zukunft liegen!*",
      entermax: "Wie viele Teilnehmer sollen maximal möglich sein? (Standard: 6)",
      
      neweventcreated: "Ein neuer Event wurde erstellt:",
      dateformat: "[Am] dd, [*]D.M.YYYY[*], [um] [*]HH:mm[*] [(]z[)]",
      nomembers: "Keine Teilnehmer",
      
      editlist: "Liste Ihrer Events:",
      selectedit: "Welche Information soll bearbeitet werden?",
      removemembers: "Welcher Teilnehmer soll entfernt werden?",
      wrongmax: "*Error*: Falsches Format!",
      
      confirmdelete: "Sind Sie sicher, dass Sie diesen Event löschen wollen?",
      deleted: "Event wurde erfolgreich gelöscht.",
      
      noeventsfound: "Keine Events gefunden.",
      notfound: "Ein Event mit dieser ID konnte nicht gefunden werden.",
      notowner: "Nur der Ersteller dieses Events kann diese bearbeiten.",
      
      startingsoon: "Ein Event an dem Sie teilnehmen beginnt in Kürze!",
      confirmcancel: "Sind Sie sicher, dass Sie diesen Event absagen wollen?",
      hascanceled: "hat für den folgenden Event abgesagt:",
      
      help: "Mit Events können Veranstaltungen besser organisiert werden. Benutzer können teilnehmen oder auch absagen und gibt so einen besseren Überblick (z.B. hilfreich bei Raid-Organisation). Jeder Event hat ein fixes Datum/Zeit und 10 Minuten vor dem Event werden alle zugesagten Teilnehmer benachrichtigt. Sollte ein Teilnehmer dennoch absagen, wird der Veranstalter/Ersteller benachrichtigt.\n\nFolgende Befehle sind verfügbar:\n`/event` : Hauptmenü\n`/event <title>;<DD.MM.YYYY>;<hh:mm>` : Schnell-Erstellung eines Events\n`/event create` : Erstellung eines Events\n`/event list` : Anzeigen aller Events\n`/event show <id>` : Anzeigen des Events mit der ID <id>\n`/event edit <id>` : Bearbeiten des Events mit der ID <id>\n`/event post <id>` : Posten des Events mit der ID <id> im aktuellen Channel\n`/event help` : Anzeigen der Hilfe"
    },
    
    poll: {
      main: "Das ist das Hauptmenü für Abstimmungen.",
      
      entertitle: "Abstimmungs-Titel eingeben: `/poll <title>`",
      entertext: "Abstimmungs-Text eingeben: `/poll <text>` (optional)",
      enteranswer: "Abstimmungs-Antwort eingeben: `/poll <answer>`",
      enteranswers: "Abstimmungs-Antwort eingeben: `/poll <answer>` (mind. 2, max. 99)\nEs können auch mehrere Antworten auf einmal eingegeben werden: `/poll <answer1>;<answer2>;...`",
      entermax: "Wie viele Antworten sollen auswählbar sein? (Standard: 1)",
      shownames: "Sollen Nutzernamen angezeigt werden? (Standard: Ja)",
      
      newpollcreated: "Eine neue Abstimmung wurde erstellt:",
      novotes: "Keine Stimmen",
      totalvotes: "Gesamt: ### Stimmen von %%% Nutzern",
      pollclosed: "Abstimmung wurde geschlossen.",
      
      editlist: "Liste Ihrer Abstimmungen:",
      selectedit: "Welche Information soll bearbeitet werden?",
      selectansweredit: "Welche Antwort soll bearbeitet werden?\nZum Hinzufügen neuer Abstimmungs-Antworten: `/poll <answer>` (max. 10)\nEs können auch mehrere Antworten auf einmal eingegeben werden: `/poll <answer1>;<answer2>;...`",
      confirmdeleteanswer: "Sind Sie sicher, dass Sie diese Antwort löschen wollen?",
      
      confirmdelete: "Sind Sie sicher, dass Sie diese Abstimmung löschen wollen?",
      deleted: "Abstimmung wurde erfolgreich gelöscht.",
      
      success: "Erfolgreich abgestimmt.",
      nopollsfound: "Keine Abstimmungen gefunden.",
      notfound: "Eine Abstimmung mit dieser ID konnte nicht gefunden werden.",
      notowner: "Nur der Ersteller dieser Abstimmung kann diese bearbeiten.",
      
      help: "Mit Polls können dynamische Umfragen/Abstimmungen mit bis zu 10 Antworten erstellt werden. Es kann zusätzlich eingestellt werden, wie viele Auswahlmöglichkeiten die Benutzer zu Verfügung haben und ob die Umfrage anonym sein soll. Der Ersteller kann Umfragen auch schließen um keine weiteren Antworten zuzulassen.\n\nFolgende Befehle sind verfügbar:\n`/poll` : Hauptmenü\n`/poll <title>;<answer1>;<answer2>;...` : Schnell-Erstellung einer Abstimmung\n`/poll create` : Erstellung einer Abstimmung\n`/poll list` : Anzeigen aller Abstimmungen\n`/poll show <id>` : Anzeigen der Abstimmung mit der ID <id>\n`/poll edit <id>` : Bearbeiten der Abstimmung mit der ID <id>\n`/poll post <id>` : Posten der Abstimmung mit der ID <id> im aktuellen Channel\n`/poll help` : Anzeigen der Hilfe"
    },
    
    bday: {
      main: "Das ist das Hauptmenü für Geburtstage.",
      
      edit: "Bitte Geburtsdatum eingeben:",
      listtitle: "Liste aller Geburtstage",
      soontitle: "Liste aller kommenden Geburtstage",
      nobdays: "Keine Geburtstage verfügbar.",
      
      confirmdelete: "Sind Sie sicher, dass Sie Ihren Geburtstag löschen wollen?",
      deleted: "Geburtstag wurde erfolgreich gelöscht.",
      
      reminder: "### hat heute Geburtstag und wird %%% Jahre alt! :tada:",
      reminderalt: "### hat heute Geburtstag! :tada:",
      
      help: "Mit Bdays werden automatisch Erinnerungen an Geburtstage der Benutzer erstellt.\n\nFolgende Befehle sind verfügbar:\n`/bday` : Hauptmenü\n`/bday list` : Liste aller Geburtstage\n`/bday soon` : Liste aller im nächsten Monat kommenden Geburtstage\n`/bday edit` : Bearbeiten des eigenen Geburtsdatums\n`/bday help` : Anzeigen der Hilfe"
    }
  }
};