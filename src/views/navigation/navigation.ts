import Vue from 'vue'
import Component from "vue-class-component";

@Component
export default class Navigation extends Vue{

  data(): any {
      return {
          attributes : [{title: 'menuTextColor',value:"#ffffff"},
                        {title: 'menuTextHoverColor',value:'#ffffff'},
                        {title: 'navBgColor',value:'#333333'},
                        {title: 'navItemHoverColor',value:'#8a8585'},
                        {title: 'menuFontType',value:'Calibri'},
                        {title: 'mainMenuNavActiveStateFontColor',value:'#ffffff'},
                        {title: 'submenuNavActiveStateFontColor',value:'#c0c0c0'},
                        {title: 'submenuNavBackgroundBoxColor',value:'#c0c0c0'},
                        {title: 'dropDownBackgroundColor',value:'#a8a8a8'},
                        {title: 'dropDownTextHoverColor',value:'#000000'}]
      };
  }

  mounted():void{
  }

  getStyleSheet():void{

  }

}
