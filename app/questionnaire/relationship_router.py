from app.questionnaire.relationship_location import RelationshipLocation


class RelationshipRouter:
    def __init__(self, section_id, block_id, list_item_ids, list_name):
        self.path = self._generate_relationships_routing_path(
            section_id=section_id,
            block_id=block_id,
            list_item_ids=list_item_ids,
            list_name=list_name,
        )

    def can_access_location(self, location):
        return location in self.path

    def get_first_location_url(self, resume=False):
        if resume:
            return self.path[0].url(resume=resume)
        return self.path[0].url()

    def get_last_location_url(self):
        return self.path[-1].url()

    def get_next_location_url(self, location):
        try:
            location_index = self.path.index(location)
            return self.path[location_index + 1].url()
        except IndexError:
            return None

    def get_previous_location_url(self, location):
        location_index = self.path.index(location)
        if not location_index:
            return None
        return self.path[location_index - 1].url()

    @staticmethod
    def _generate_relationships_routing_path(
        section_id, block_id, list_item_ids, list_name
    ):
        path = []
        for from_item in list_item_ids:
            from_index = list_item_ids.index(from_item)
            for to_item in list_item_ids[from_index + 1 :]:
                path.append(
                    RelationshipLocation(
                        section_id=section_id,
                        block_id=block_id,
                        list_item_id=from_item,
                        to_list_item_id=to_item,
                        list_name=list_name,
                    )
                )

        return path
