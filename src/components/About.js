
export const About = () => {
return (
<div class="container mx-auto">
    <header>INFORMATION ABOUT LAZY MINTING</header>
 <p>The basic premise of lazy minting is that instead of creating an NFT directly by calling a contract function, the NFT creator prepares a cryptographic signature of some data using their Ethereum account's private key.

The signed data acts as a "voucher" or ticket that can be redeemed for an NFT. The voucher contains all the information that will go into the actual NFT, and it may optionally contain additional data that isn't recorded in the blockchain, as we'll see in a bit when we talk about prices. The signature proves that the NFT creator authorized the creation of the specific NFT described in the voucher.

When a buyer wants to purchase the NFT, they call a redeem function to redeem the signed voucher. If the signature is valid and belongs to an account that's authorized to mint NFTs, a new token is created based on the voucher and transfered to the buyer.
The voucher contains two pieces of information that will be recorded into the blockchain: the unique tokenId, and the uri for the token's metadata. The minPrice is not recorded, but it is used in our redeem function to allow the creator to set a purchase price. If the minPrice is greater than zero, the buyer will need to send at least that much Ether when they call redeem.


Lazy minting is a powerful technique that can let creators issue new NFTs at no up-front cost.</p>

</div>
)
}
