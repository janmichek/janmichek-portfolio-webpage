<template>
  <nuxt-layout name="slug">
    <article>
      <slug-title
        title="Karabiner Shortcuts"
        description="My personal way to tune ergonomics. I believe this is ultimate good, but it may serve as
         inspiration. At least this setting helped me to save tons of seconds today"/>

      <a href="https://github.com/janmichek/karabiner-elements-settings/blob/main/karabiner.json">
        See the Settings on GitHub</a>

      <br>
      <br>
      <div>
        <table class="karabiner-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Key Combo</th>
              <th>Function</th>
            </tr>
          </thead>
          <tbody>
            <tr class="firefox">
              <td><strong>Firefox</strong></td>
              <td>F1</td>
              <td>Switch to previous tab</td>
            </tr>
            <tr class="firefox">
              <td><strong>Firefox</strong></td>
              <td>F2 (tap)</td>
              <td>Close tab</td>
            </tr>
            <tr class="firefox">
              <td><strong>Firefox</strong></td>
              <td>F2 (hold)</td>
              <td>Reopen closed tab</td>
            </tr>
            <tr class="firefox">
              <td><strong>Firefox</strong></td>
              <td>F4</td>
              <td>Open downloads</td>
            </tr>
            <tr class="firefox">
              <td><strong>Firefox</strong></td>
              <td>F12 (tap)</td>
              <td>Developer tools</td>
            </tr>
            <tr class="firefox">
              <td><strong>Firefox</strong></td>
              <td>F12 (hold)</td>
              <td>Open inspector</td>
            </tr>

            <!-- WebStorm Section -->
            <tr class="webstorm">
              <td><strong>WebStorm</strong></td>
              <td>F1</td>
              <td>Switch tabs</td>
            </tr>
            <tr class="webstorm">
              <td><strong>WebStorm</strong></td>
              <td>F2</td>
              <td>Search files</td>
            </tr>
            <tr class="webstorm">
              <td><strong>WebStorm</strong></td>
              <td>F6</td>
              <td>New file/Quick actions</td>
            </tr>
            <tr class="webstorm">
              <td><strong>WebStorm</strong></td>
              <td>F7</td>
              <td>Quick actions</td>
            </tr>
            <tr class="webstorm">
              <td><strong>WebStorm</strong></td>
              <td>F8</td>
              <td>Stash changes</td>
            </tr>
            <tr class="webstorm">
              <td><strong>WebStorm</strong></td>
              <td>F9</td>
              <td>Unstash changes</td>
            </tr>
            <tr class="webstorm">
              <td><strong>WebStorm</strong></td>
              <td>F10</td>
              <td>Show usage + Run</td>
            </tr>
            <tr class="webstorm">
              <td><strong>WebStorm</strong></td>
              <td>F11</td>
              <td>Find files</td>
            </tr>
            <tr class="webstorm">
              <td><strong>WebStorm</strong></td>
              <td>F12</td>
              <td>Terminal</td>
            </tr>

            <!-- Finder Section -->
            <tr class="finder">
              <td><strong>Finder</strong></td>
              <td>Enter</td>
              <td>Open folder/file</td>
            </tr>
            <tr class="finder">
              <td><strong>Finder</strong></td>
              <td>Delete Forward</td>
              <td>Move to trash</td>
            </tr>
            <tr class="finder">
              <td><strong>Finder</strong></td>
              <td>CMD+H</td>
              <td>Toggle hidden files</td>
            </tr>

            <!-- System Functions Section -->
            <tr class="system">
              <td><strong>System</strong></td>
              <td>~ (hold)</td>
              <td>Hide/Show Dock</td>
            </tr>
            <tr class="system">
              <td><strong>System</strong></td>
              <td>Left CMD (tap)</td>
              <td>Open Alfred</td>
            </tr>
            <tr class="system">
              <td><strong>System</strong></td>
              <td>Double ESC</td>
              <td>Quit current app</td>
            </tr>
            <tr class="system">
              <td><strong>System</strong></td>
              <td>CMD + F1</td>
              <td>Brightness down</td>
            </tr>
            <tr class="system">
              <td><strong>System</strong></td>
              <td>CMD + F2</td>
              <td>Brightness up</td>
            </tr>
            <tr class="system">
              <td><strong>System</strong></td>
              <td>CMD + F3</td>
              <td>Keyboard backlight down</td>
            </tr>
            <tr class="system">
              <td><strong>System</strong></td>
              <td>CMD + F4</td>
              <td>Keyboard backlight up</td>
            </tr>
            <tr class="system">
              <td><strong>System</strong></td>
              <td>CMD + F5</td>
              <td>Screenshot area</td>
            </tr>
            <tr class="system">
              <td><strong>System</strong></td>
              <td>CMD + F6</td>
              <td>Focus change</td>
            </tr>
            <tr class="system">
              <td><strong>System</strong></td>
              <td>CMD + F7</td>
              <td>Previous track</td>
            </tr>
            <tr class="system">
              <td><strong>System</strong></td>
              <td>CMD + F8</td>
              <td>Play/Pause</td>
            </tr>
            <tr class="system">
              <td><strong>System</strong></td>
              <td>CMD + F9</td>
              <td>Next track</td>
            </tr>
            <tr class="system">
              <td><strong>System</strong></td>
              <td>CMD + F10</td>
              <td>Mute</td>
            </tr>
            <tr class="system">
              <td><strong>System</strong></td>
              <td>CMD + F11</td>
              <td>Volume down</td>
            </tr>
            <tr class="system">
              <td><strong>System</strong></td>
              <td>CMD + F12</td>
              <td>Volume up</td>
            </tr>
            <tr class="system">
              <td><strong>System</strong></td>
              <td>End key</td>
              <td>Cursor to end of line</td>
            </tr>
            <tr class="system">
              <td><strong>System</strong></td>
              <td>Home key</td>
              <td>Cursor to beginning of line</td>
            </tr>
            <!-- Ableton Section -->
            <tr class="ableton">
              <td><strong>Ableton</strong></td>
              <td>F1</td>
              <td>Fold tracks</td>
            </tr>
            <tr class="ableton">
              <td><strong>Ableton</strong></td>
              <td>F2 (tap)</td>
              <td>Fade tool</td>
            </tr>
            <tr class="ableton">
              <td><strong>Ableton</strong></td>
              <td>F2 (hold)</td>
              <td>Show automation</td>
            </tr>
            <tr class="ableton">
              <td><strong>Ableton</strong></td>
              <td>F3</td>
              <td>Split clips</td>
            </tr>
            <tr class="ableton">
              <td><strong>Ableton</strong></td>
              <td>F4</td>
              <td>Glue clips</td>
            </tr>
            <tr class="ableton">
              <td><strong>Ableton</strong></td>
              <td>F5</td>
              <td>Trim clips</td>
            </tr>
            <tr class="ableton">
              <td><strong>Ableton</strong></td>
              <td>F6</td>
              <td>Quantize</td>
            </tr>
            <!-- Apps Launcher Section -->
            <tr class="apps">
              <td><strong>Apps</strong></td>
              <td>Caps Lock + A (hold)</td>
              <td>Open Ableton Live 12</td>
            </tr>
            <tr class="apps">
              <td><strong>Apps</strong></td>
              <td>Caps Lock + B (hold)</td>
              <td>Open Beeper Desktop</td>
            </tr>
            <tr class="apps">
              <td><strong>Apps</strong></td>
              <td>Caps Lock + C (hold)</td>
              <td>Open Calendar</td>
            </tr>
            <tr class="apps">
              <td><strong>Apps</strong></td>
              <td>Caps Lock + D (hold)</td>
              <td>Open Firefox Developer Edition</td>
            </tr>
            <tr class="apps">
              <td><strong>Apps</strong></td>
              <td>Caps Lock + E (hold)</td>
              <td>Open Finder</td>
            </tr>
            <tr class="apps">
              <td><strong>Apps</strong></td>
              <td>Caps Lock + F (hold)</td>
              <td>Open Firefox</td>
            </tr>
            <tr class="apps">
              <td><strong>Apps</strong></td>
              <td>Caps Lock + K (hold)</td>
              <td>Open Keep</td>
            </tr>
            <tr class="apps">
              <td><strong>Apps</strong></td>
              <td>Caps Lock + M (hold)</td>
              <td>Open Gmail</td>
            </tr>
            <tr class="apps">
              <td><strong>Apps</strong></td>
              <td>Caps Lock + N (hold)</td>
              <td>Open MEGAsync</td>
            </tr>
            <tr class="apps">
              <td><strong>Apps</strong></td>
              <td>Caps Lock + V (hold)</td>
              <td>Open Surfshark</td>
            </tr>
            <tr class="apps">
              <td><strong>Apps</strong></td>
              <td>Caps Lock + W (hold)</td>
              <td>Open WebStorm</td>
            </tr>
            <tr class="apps">
              <td><strong>Apps</strong></td>
              <td>Caps Lock + I (hold)</td>
              <td>Open Instagram in Firefox</td>
            </tr>
            <tr class="apps">
              <td><strong>Apps</strong></td>
              <td>Caps Lock + P (hold)</td>
              <td>Open Photopea</td>
            </tr>
            <tr class="apps">
              <td><strong>Apps</strong></td>
              <td>Caps Lock + Y (hold)</td>
              <td>Open YouTube in Firefox</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  </nuxt-layout>
</template>

<style scoped>
.firefox:nth-of-type(odd) {
  background: #e3f2fd;
}

.firefox:nth-of-type(even) {
  background: #bbdefb;
}

.webstorm:nth-of-type(odd) {
  background: #e8f5e8;
}

.webstorm:nth-of-type(even) {
  background: #c8e6c9;
}

.finder:nth-of-type(odd) {
  background: #fff3e0;
}

.finder:nth-of-type(even) {
  background: #ffe0b2;
}

.system:nth-of-type(odd) {
  background: #f3e5f5;
}

.system:nth-of-type(even) {
  background: #e1bee7;
}

.ableton:nth-of-type(odd) {
  background: #ffebee;
}

.ableton:nth-of-type(even) {
  background: #ffcdd2;
}

.apps:nth-of-type(odd) {
  background: #e0f2f1;
}

.apps:nth-of-type(even) {
  background: #b2dfdb;
}
</style>
