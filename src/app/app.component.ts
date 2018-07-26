import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  socialLinks = [
    {
      type: 'linkedin',
      link: 'https://linkedin.com/in/uurtsaikh'
    },
    {
      type: 'github',
      link: 'https://github.com/uurtsaikhb'
    },
    {
      type: 'facebook',
      link: 'https://facebook.com/uurtsaikha'
    },
    {
      type: 'twitter',
      link: 'https://twitter.com/uuree'
    },
    {
      type: 'youtube',
      link: 'https://www.youtube.com/channel/UCjoWQdDMkbU-7tXaVvajxqg/videos'
    },
    {
      type: 'file-pdf-o',
      link: 'http://uurtsaikh.com/assets/Resume - Uurtsaikh Batbileg.pdf'
    }
  ];

  onClickNavbarIcon(link) {
    window.open(link);
  }

  returnClassName(type) {
    if (type) {
      return 'fa-' + type;
    }

    return null;
  }
}
