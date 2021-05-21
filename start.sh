tsc -p tsconfig.json && sudo pkg ./build/index.js --out-path bin/

OS="`uname`"
case $OS in
  'Linux')
        mv bin/index-linux bin/BaseImageEncoder64 
        sudo mv bin/BaseImageEncoder64 /usr/bin/
    ;;
  'WindowsNT')
    echo "CryptosByte does not know how to make commands in PS1."
    ;;
  'Darwin') 
    echo "CryptosByte does not know how to make commands in MacOS."
    ;;
  *) ;;
esac

rm -rf bin/*