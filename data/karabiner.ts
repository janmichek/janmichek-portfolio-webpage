export interface Row {
  keys: string[]
  action: string
  hint?: 'tap' | 'hold'
}

export interface Group {
  id: string
  title: string
  rows: Row[]
}

export const groups: Group[] = [
  {
    id: 'navigation',
    title: 'Navigation',
    rows: [
      { keys: ['Shift', 'Cmd', '←'], action: 'Select word left' },
      { keys: ['Shift', 'Cmd', '→'], action: 'Select word right' },
      { keys: ['Cmd', '←'], action: 'Move word left' },
      { keys: ['Cmd', '→'], action: 'Move word right' },
      { keys: ['End'], action: 'Cursor to end of line' },
      { keys: ['Home'], action: 'Cursor to beginning of line' },
    ],
  },
  {
    id: 'firefox',
    title: 'Firefox',
    rows: [
      { keys: ['F1'], action: 'Switch to next tab' },
      { keys: ['F2'], hint: 'tap', action: 'Close tab' },
      { keys: ['F2'], hint: 'hold', action: 'Reopen closed tab' },
      { keys: ['F4'], action: 'Open downloads' },
      { keys: ['F12'], hint: 'tap', action: 'Developer tools' },
      { keys: ['F12'], hint: 'hold', action: 'Open inspector' },
    ],
  },
  {
    id: 'webstorm',
    title: 'WebStorm',
    rows: [
      { keys: ['Cmd', 'C'], action: 'Enhanced copy' },
      { keys: ['F1'], action: 'Switch tabs' },
      { keys: ['F2'], action: 'Search files' },
      { keys: ['F6'], action: 'New file / Quick actions' },
      { keys: ['F7'], action: 'Quick actions' },
      { keys: ['F8'], action: 'Stash changes' },
      { keys: ['F9'], action: 'Unstash changes' },
      { keys: ['F10'], action: 'Show usage + Run' },
      { keys: ['F11'], action: 'Find files' },
      { keys: ['F12'], action: 'Terminal' },
    ],
  },
  {
    id: 'ableton',
    title: 'Ableton',
    rows: [
      { keys: ['F1'], action: 'Fold tracks' },
      { keys: ['F2'], hint: 'tap', action: 'Fade tool' },
      { keys: ['F2'], hint: 'hold', action: 'Show automation' },
      { keys: ['F3'], action: 'Split clips' },
      { keys: ['F4'], action: 'Glue clips' },
      { keys: ['F5'], action: 'Trim clips' },
      { keys: ['F6'], action: 'Quantize' },
    ],
  },
  {
    id: 'finder',
    title: 'Finder',
    rows: [
      { keys: ['Enter'], action: 'Open folder / file' },
      { keys: ['Delete Forward'], action: 'Move to trash' },
      { keys: ['Cmd', 'H'], action: 'Toggle hidden files' },
    ],
  },
  {
    id: 'system',
    title: 'System',
    rows: [
      { keys: ['~'], hint: 'hold', action: 'Hide / show Dock' },
      { keys: ['Left Cmd'], hint: 'tap', action: 'Open Alfred' },
      { keys: ['Esc', 'Esc'], action: 'Quit current app' },
      { keys: ['Shift', 'Shift', 'Shift'], action: 'Screenshot selection to clipboard' },
      { keys: ['Cmd', 'F1'], action: 'Brightness down' },
      { keys: ['Cmd', 'F2'], action: 'Brightness up' },
      { keys: ['Cmd', 'F3'], action: 'Keyboard backlight down' },
      { keys: ['Cmd', 'F4'], action: 'Keyboard backlight up' },
      { keys: ['Cmd', 'F5'], action: 'Screenshot area' },
      { keys: ['Cmd', 'F6'], action: 'Focus change' },
      { keys: ['Cmd', 'F7'], action: 'Previous track' },
      { keys: ['Cmd', 'F8'], action: 'Play / Pause' },
      { keys: ['Cmd', 'F9'], action: 'Next track' },
      { keys: ['Cmd', 'F10'], action: 'Mute' },
      { keys: ['Cmd', 'F11'], action: 'Volume down' },
      { keys: ['Cmd', 'F12'], action: 'Volume up' },
    ],
  },
  {
    id: 'apps',
    title: 'Apps',
    rows: [
      { keys: ['Caps Lock', 'A'], hint: 'hold', action: 'Ableton Live 12' },
      { keys: ['Caps Lock', 'B'], hint: 'hold', action: 'Beeper Desktop' },
      { keys: ['Caps Lock', 'C'], hint: 'hold', action: 'Calendar' },
      { keys: ['Caps Lock', 'D'], hint: 'hold', action: 'Firefox Nightly' },
      { keys: ['Caps Lock', 'E'], hint: 'hold', action: 'Finder' },
      { keys: ['Caps Lock', 'F'], hint: 'hold', action: 'Firefox' },
      { keys: ['Caps Lock', 'I'], hint: 'hold', action: 'Instagram in Firefox' },
      { keys: ['Caps Lock', 'K'], hint: 'hold', action: 'Google Keep' },
      { keys: ['Caps Lock', 'M'], hint: 'hold', action: 'Gmail' },
      { keys: ['Caps Lock', 'N'], hint: 'hold', action: 'MEGAsync' },
      { keys: ['Caps Lock', 'P'], hint: 'hold', action: 'Photopea' },
      { keys: ['Caps Lock', 'S'], hint: 'hold', action: 'Spotify' },
      { keys: ['Caps Lock', 'V'], hint: 'hold', action: 'Surfshark' },
      { keys: ['Caps Lock', 'W'], hint: 'hold', action: 'WebStorm' },
      { keys: ['Caps Lock', 'Y'], hint: 'hold', action: 'YouTube in Firefox' },
    ],
  },
]
