export interface TeamInterface {
    add(team: any):void;
    // update(team:T):void;
    // delete(team:T):void;
    // getAll(team:T):void;
    // getById(team:T):void;
}
export abstract class TeamFactory {
    /**
     * Note that the TeamFactory may also provide some default implementation of the
     * factory method.
     */
    public abstract team(): TeamInterface;

    /**
     * Also note that, despite its name, the TeamFactory's primary responsibility is
     * not creating products. Usually, it contains some core business logic that
     * relies on Product objects, returned by the factory method. Subclasses can
     * indirectly change that business logic by overriding the factory method
     * and returning a different type of product from it.
     */
    public add(): string {
      // Call the factory method to create a Product object.
      const team = this.team();
      // Now, use the product.
      return `TeamFactory: The same TeamFactory's code has just worked with ${team.add(null)}`;
    }
}
