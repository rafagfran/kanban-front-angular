import { Component, Input } from '@angular/core';
import { IconChatText } from '../../../../../svg/icons/chatText.component';
import { IconFileText } from '../../../../../svg/icons/fileText.component';

@Component({
  selector: 'app-card-task',
  imports: [IconChatText, IconFileText],
  templateUrl: './card-task.component.html',
})
export class CardTaskComponent {
  @Input() id!: string;
  @Input() title!: string;
  @Input() description!: string;
}
