#include         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png"><dirent.h>
#include         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png"><cstring>
#include         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png"><iostream>
#include         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png"><vector>
#include         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png"><memory>
using         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">namespace         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">std;
vector<string>         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">GetDirectoryFiles(const         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">string&         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">dir)         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">{
         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">vector<string>         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">files;
         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">shared_ptr<DIR>         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">directory_ptr(opendir(dir.c_str()),         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">[](DIR*         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">dir){         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">dir         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">&&         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">closedir(dir);         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">});
         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">struct         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">dirent         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">*dirent_ptr;
         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">if         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">(!directory_ptr)         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">{
         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">cout         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png"><<         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">"Error         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">opening         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">:         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">"         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png"><<         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">strerror(errno)         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png"><<         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">dir         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png"><<         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">endl;
         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">return         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">files;
         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">}
         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">
         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">while         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">((dirent_ptr         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">=         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">readdir(directory_ptr.get()))         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">!=         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">nullptr)         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">{
         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">files.push_back(string(dirent_ptr->d_name));
         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">}
         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">return         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">files;
}

         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">
int         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">main()         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">{
         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">const         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">auto&         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">directory_path         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">=         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">string(".");
         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">const         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">auto&         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">files         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">=         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">GetDirectoryFiles(directory_path);
         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">for         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">(const         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">auto&         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">file         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">:         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">files)         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">{
         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">cout         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png"><<         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">file         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png"><<         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">endl;
         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">}
         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">return         <div class="responsive">
                <div class="gallery">
                  <a target="_blank" href="images/logo.png">0;
}