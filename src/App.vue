<template lang="pug">
  #app
    b-navbar(toggleable='lg' type='dark' variant='info')
      b-container
        b-navbar-brand(to='/') 蕃茄鐘
        b-navbar-toggle(target='nav-collapse')
        b-collapse#nav-collapse(is-nav)
          b-navbar-nav
            b-nav-item(to='/list' active-class="active") 代辦事項
            b-nav-item(to='/settings' active-class="active") 設定
    router-view 
</template>
