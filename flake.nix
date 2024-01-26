{
  description = "Fireworks canvas, made with Next.js. Happy new year!";
  inputs = {
    nixpkgs.url = "nixpkgs/nixos-unstable";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
        packages = with pkgs; [
          nodejs_20
          corepack_20
        ];
      in
      {
        devShell = pkgs.mkShell {
          buildInputs = packages;
        };
        formatter = pkgs.nixpkgs-fmt;
      }
    );
}
