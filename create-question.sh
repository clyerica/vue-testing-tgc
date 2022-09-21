echo "Creating question"
vue create "$@"
cp templates/jest.config.js "$@"/
echo "Waiting for boilerplate Vue files to complete"
sleep 2s
cp templates/vue.config.js "$@"/
cp templates/App.vue "$@"/src/App.vue
rm "$@"/src/components/HelloWorld.vue
echo "Installing unit test"
cd "$@"
vue add unit-jest