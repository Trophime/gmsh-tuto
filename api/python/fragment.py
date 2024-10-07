
        ov, ovv = gmsh.model.occ.fragment([(2, A_id)], [(2, j) for j in flat_list])
        """
        print(f'Air fragment map: A_id={A_id}')
        print("fragment produced surfaces:")
        for e in ov:
            print(e)
        # ovv contains the parent-child relationships for all the input entities:
        print("before/after fragment relations:")
        for e in zip([(2, A_id)] + [(2, j) for j in flat_list], ovv):
            print("parent " + str(e[0]) + " -> child " + str(e[1]))
        """

