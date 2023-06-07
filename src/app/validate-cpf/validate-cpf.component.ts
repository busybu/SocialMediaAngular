import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-validate-cpf',
  templateUrl: './validate-cpf.component.html',
  styleUrls: ['./validate-cpf.component.css']
})
export class ValidateCpfComponent implements OnInit {
  @Output() valueChanged = new EventEmitter<string>();
  @Input() breakLineOnInput = true;
  @Input() seeCpf = false

  protected inputType = "text";
  protected inputStyle = "color: black;"
  protected inputText = "";
  protected initialState = true;

  ngOnInit(): void 
  {
    this.updateInput()
  }

  protected updateInput() {
    if (this.initialState) {
      this.inputText = "Digite o CPF:"
      this.inputType = "text"
      this.inputStyle = "color: gray;"
      return
    }
    this.inputStyle = "color: black;"
  }
  protected cpfClick() {
    if (!this.initialState)
      return
    this.initialState = false;
    this.inputText = "";
    this.updateInput();
  }
  protected cpfChanged() {
    this.updateInput()
    this.valueChanged.emit(this.inputText)
  }
  protected verifyCpf()
  {
    
    this.updateInput()
  }
}

