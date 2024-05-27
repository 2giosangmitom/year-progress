{
  description = "A website for tracking the progress of the current year visually";
  inputs = {
    nixpkgs.url = "nixpkgs/nixos-unstable";
  };

  outputs = {
    nixpkgs,
    ...
  }: let
    system = "x86_64-linux";
    pkgs = import nixpkgs {
      inherit system;
      config = {
        allowUnfree = true;
      };
    };
  in {
    devShells.${system}.default = pkgs.mkShell {
      buildInputs = with pkgs; [
        alejandra
        nil
        nodejs_20
        corepack_20
        nodePackages.prettier
      ];
    };
    formatter.${system} = pkgs.alejandra;
  };
}
