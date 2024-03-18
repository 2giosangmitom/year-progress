{
  description = "Year progress";
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
          fish
        ];
      in
      {
        devShell = pkgs.mkShell {
          buildInputs = packages;
          shellHook = ''
            exec fish
          '';
        };
        formatter = pkgs.nixpkgs-fmt;
      }
    );
}
