# Modules

Javascript code structure is divided into 2 parts :

- global and reusable features (mostly technic features) : app/scripts
- specific functional features : app/modules

For functional features, you'll have to :

- create a specific folder "app/modules/myFeature"
- create an entry point : "app/modules/myFeature/app.js"
- add any controller you need for that particular feature with its template

## Entry point

The module's app.js takes care of all module configuration :

- routing (config phase)
- template combine configuration (config phase)
- specific provider configuration (config phase)
- code executed at runtime (run phase)
