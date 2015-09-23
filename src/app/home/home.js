

function HomeController(BlogService, MetadataService) {
    var vm = this;

    vm.homePage = [];
    
    BlogService.getPageBySlug('services').then(function(posts) {
        vm.homePage = posts;
       
    });

    // pass an empty object to use the defaults.
    MetadataService.setMetadata({});
}

angular
    .module('app')
    .controller('HomeController', HomeController);
