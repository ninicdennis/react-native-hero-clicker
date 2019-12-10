function mapStateToProps(state) {
   return {
     gold: state.gold,
     click: state.click,
     shop: state.shop,
     guild: state.guild,
     ironSword: state.ironSword
   };
 }

 export default mapStateToProps