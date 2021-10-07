const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, {defaultConfig}) => {
  if(phase === PHASE_DEVELOPMENT_SERVER){
    return {
      env:{
        DB_USER: 'admin',
        DB_PASSWORD: 'admin'
      },
      // basePath:'/doggy',
      // async redirects(){
      //   return[
      //     {
      //       source:'/posts',
      //       destination:'/',
      //       permanent: true
      //     }
      //   ]
      // },
      async Headers(){
        return [
          {
            source:'/posts',
            header:[
              {
                key:'x-awesome',
                value:'my awesome value'
              }
            ]
          }
        ]
      },
      // compress:false
    }
  }

  return{
    env:{
      DB_USER: 'admin',
      DB_PASSWORD: 'admin'
    }
  }
}