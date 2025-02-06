import { Component } from '@angular/core';
import { IconChatText } from '../../../../../svg/icons/chatText.component';
import { IconFileText } from '../../../../../svg/icons/fileText.component';

@Component({
  selector: 'app-card-task',
  imports: [IconChatText, IconFileText],
  templateUrl: './card-task.component.html',
  styleUrl: './card-task.component.css'
})
export class CardTaskComponent {

}
